from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from . import serializers
from rest_framework import generics ,permissions , pagination ,viewsets
from . import models
from . import urls
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError


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
            
# Create your views here.
class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    # permission_classes = [permissions.IsAuthenticated]
    
    
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