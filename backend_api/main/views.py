from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from . import serializers
from rest_framework import generics , viewsets
from . import models
from . import urls
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import razorpay
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse , FileResponse ,Http404
from django.conf import settings
import os
from django.utils.encoding import smart_str


class VendorSignupView(APIView):
    def post(self, request):
        serializer = serializers.VendorSignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Vendor registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# vendor's specific product view

class VendorProductList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            vendor = models.Vendor.objects.get(user=request.user)
        except models.Vendor.DoesNotExist:
            return Response({"detail": "You are not a vendor."}, status=status.HTTP_403_FORBIDDEN)

        products = models.Product.objects.filter(vendor=vendor)
        serializer = serializers.ProductListSerializer(products, many=True)
        return Response(serializer.data)
    
# vendor add product  
class VendorAddProduct(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            vendor = models.Vendor.objects.get(user=request.user)
        except models.Vendor.DoesNotExist:
            return Response({'detail': 'You are not registered as a vendor.'}, status=403)
        data = request.data.copy()
        data['vendor'] = vendor.id
        serializer = serializers.ProductListSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

# vendor dashboard

class SellerDashboardStats(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        try:
            vendor = models.Vendor.objects.get(user=request.user)
        except:
            return Response({"error": "Vendor profile not found."}, status=404)

        total_products = models.Product.objects.filter(vendor=vendor).count()
        total_orders = models.Order.objects.filter(order_items__product__vendor=vendor).distinct().count()
        total_customers = models.Customer.objects.filter(
            order__order_items__product__vendor=vendor
        ).distinct().count()

        return Response({
            "total_products": total_products,
            "total_orders": total_orders,
            "total_customers": total_customers
        })
        
class DeleteVendorProduct(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        try:
            vendor = models.Vendor.objects.get(user=request.user)
            product = models.Product.objects.get(pk=pk, vendor=vendor)
            product.delete()
            return Response({"message": "Product deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        except models.Product.DoesNotExist:
            return Response({"error": "Product not found or unauthorized"}, status=status.HTTP_404_NOT_FOUND)
          
class DownloadScriptView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, order_item_id):
        try:
            order_item = models.OrderItem.objects.get(id=order_item_id, order__customer__user=request.user)
        except models.OrderItem.DoesNotExist:
            raise Http404("Order item not found")

        product_file = order_item.product.file
        if not product_file:
            raise Http404("No file attached")

        filename = os.path.basename(product_file.name)

        response = FileResponse(product_file.open("rb"), as_attachment=True)
        response["Content-Disposition"] = f'attachment; filename="{smart_str(filename)}"'
        return response


@csrf_exempt
def create_razorpay_order(request):
    import json
    data = json.loads(request.body)
    amount = int(float(data['amount']) * 100)  # Razorpay accepts paise

    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))

    payment = client.order.create({
        "amount": amount,
        "currency": "INR",
        "payment_capture": "1"
    })

    return JsonResponse(payment)


# customer register
class CustomerRegisterView(APIView):
    def post(self, request):
        serializer = serializers.CustomerRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Customer registered successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# customer login 
class CustomerProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            customer = models.Customer.objects.get(user=request.user)
            serializer = serializers.CustomerSerializer(customer)
            return Response(serializer.data)
        except models.Customer.DoesNotExist:
            return Response({"error": "Customer not found"}, status=404)
        
class CustomerDashboardStats(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        customer = models.Customer.objects.get(user=request.user)
        orders = models.Order.objects.filter(customer=customer).count()
        wishlist = models.Wishlist.objects.filter(customer=customer).count()

        return Response({
            "total_orders": orders,
            "total_wishlist": wishlist,
        })
            
# wishlist.
class WishlistListCreateView(generics.ListCreateAPIView):
    serializer_class = serializers.WishlistSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        customer = models.Customer.objects.get(user=self.request.user)
        return models.Wishlist.objects.filter(customer=customer)

    def perform_create(self, serializer):
        customer = models.Customer.objects.get(user=self.request.user)
        serializer.save(customer=customer)


class WishlistDeleteView(generics.DestroyAPIView):
    serializer_class = serializers.WishlistSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'pk'

    def get_queryset(self):
        customer = models.Customer.objects.get(user=self.request.user)
        return models.Wishlist.objects.filter(customer=customer)


class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]
    
class VendorProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            vendor = models.Vendor.objects.get(user=request.user)
            serializer = serializers.VendorSignupSerializer(vendor)
            return Response(serializer.data)
        except models.Vendor.DoesNotExist:
            return Response({"error": "Not a vendor"}, status=403)    
    
class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]
    

class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    # pagination_class= pagination.LimitOffsetPagination
    
    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.GET.get('category')  # Safely get query param
        if category_id:
            try:
                category = models.ProductCategory.objects.get(id=category_id)
                qs = qs.filter(category=category)
            except models.ProductCategory.DoesNotExist:
                qs = qs.none()  # Return empty queryset if category doesn't exist
        return qs
    

class RelatedProductList(generics.ListAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        product_id = self.kwargs['pk']
        product = models.Product.objects.get(id=product_id)
        qs = qs.filter(category=product.category).exclude(id=product_id) 
        return qs


class ProductDetail(generics.RetrieveUpdateDestroyAPIView ):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer

class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer



class CustomerDetail(generics.RetrieveUpdateDestroyAPIView ):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer
    
class Order(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        # print("User:", self.request.user)   # Debug
        # print("Customer exists:", Customer.objects.filter(user=self.request.user).exists())
        try:
            customer = models.Customer.objects.get(user=user)
        except models.Customer.DoesNotExist:
            raise serializers.ValidationError("Customer not found for this user.")
        serializer.save(customer=customer)
    
class OrderItem(generics.ListCreateAPIView):
    serializer_class = serializers.OrderItemSerializer

    def get_queryset(self):
        return models.OrderItem.objects.filter(order__id=self.kwargs['pk'])

    def perform_create(self, serializer):
        import logging
        logger = logging.getLogger(__name__)
        order_id = self.kwargs['pk']
        logger.debug(f"Adding item to order #{order_id}: data={self.request.data}")

        try:
            order = models.Order.objects.get(id=order_id)
        except models.Order.DoesNotExist:
            logger.error(f"Order #{order_id} not found")
            raise ValidationError("Order not found.")

        product_id = self.request.data.get("product")
        if not product_id:
            logger.error("No product ID in request.")
            raise ValidationError("Missing 'product' field.")

        try:
            product = models.Product.objects.get(id=product_id)
        except models.Product.DoesNotExist:
            logger.error(f"Product #{product_id} not found.")
            raise ValidationError("Product not found.")

        serializer.save(order=order, product=product)
        logger.debug(f"OrderItem created successfully for order {order_id}, product {product_id}")



    
    def get_queryset(self):
        order_id = self.kwargs['pk']
        order=models.Order.objects.get(id=order_id)
        order_item= models.OrderItem.objects.filter(order=order)
        return order_item
    


class PlaceOrderAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        cart_items = request.data.get("items", [])
        if not cart_items:
            return Response({"error": "Cart is empty"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            customer = models.Customer.objects.get(user=user)
        except models.Customer.DoesNotExist:
            return Response({"error": "Customer not found"}, status=status.HTTP_400_BAD_REQUEST)

        # Create Order
        order = models.Order.objects.create(customer=customer)

        # Create OrderItems
        for item in cart_items:
            product_id = item.get("id")
            try:
                product = models.Product.objects.get(id=product_id)
            except models.Product.DoesNotExist:
                return Response({"error": f"Product {product_id} not found"}, status=status.HTTP_400_BAD_REQUEST)
            
            models.OrderItem.objects.create(order=order, product=product)

        return Response({
            "message": "Order placed successfully",
            "order_id": order.id,
        }, status=status.HTTP_201_CREATED)


class CustomerOrderListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            customer = models.Customer.objects.get(user=request.user)
        except models.Customer.DoesNotExist:
            return Response({"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND)

        orders = models.Order.objects.filter(customer=customer).order_by('-Order_time')
        serializer = serializers.OrderSerializer(orders, many=True)
        return Response(serializer.data)
       
class CustomerAddressViewset(viewsets.ModelViewSet):
    queryset = models.CustomerAddress.objects.all()
    serializer_class = serializers.CustomerAddressSerializer
    
    
class ProductRatingViewset(viewsets.ModelViewSet):
    queryset = models.ProductRating.objects.all()
    serializer_class = serializers.ProductRatingSerializer
    
    
class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]
    
    
class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]