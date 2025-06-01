from django.shortcuts import render
from . import serializers
from rest_framework import generics ,permissions , pagination ,viewsets
from . import models
from . import urls


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
    
class OrderItem(generics.RetrieveUpdateDestroyAPIView):
    # queryset = models.OrderItem.objects.all()
    serializer_class = serializers.OrderItemSerializer
    
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