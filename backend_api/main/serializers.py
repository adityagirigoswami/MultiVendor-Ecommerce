from rest_framework import serializers
from . import models

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields= ['id', 'user','address']
        depth = 1
        
class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields= ['id','user','address']
        depth = 1
        

class ProductListSerializer(serializers.ModelSerializer):
    vendor_username = serializers.CharField(source='vendor.user.username', read_only=True)
    class Meta:
        model = models.Product
        fields= ['id','category','vendor' , 'vendor_username' , 'title' , 'detail' , 'price']
        

class ProductDetailSerializer(serializers.ModelSerializer):
    vendor_username = serializers.CharField(source='vendor.user.username', read_only=True)
    class Meta:
        model = models.Product
        fields= ['id','category','vendor' , 'vendor_username' , 'title' , 'detail' , 'price']
        # depth = 1

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields= ['id', 'user','mobile']
        # depth = 1
        
class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields= ['id','user','mobile']
        # depth = 1