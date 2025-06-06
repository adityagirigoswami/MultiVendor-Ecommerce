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
        
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductImage
        fields = ['id','product','image']
        
        
class ProductListSerializer(serializers.ModelSerializer):
    vendor_username = serializers.CharField(source='vendor.user.username', read_only=True)
    product_rating= serializers.StringRelatedField(many=True , read_only=True)

    class Meta:
        model = models.Product
        fields= ['id','category','vendor' , 'vendor_username' , 'title' , 'slug', 'tag_list','detail' , 'price' , 'product_rating', 'image']

  

class ProductDetailSerializer(serializers.ModelSerializer):
    vendor_username = serializers.CharField(source='vendor.user.username', read_only=True)
    product_rating= serializers.StringRelatedField(many=True , read_only=True)
    product_imgs=ProductImageSerializer(many=True , read_only=True)   
    class Meta:
        model = models.Product
        fields= ['id','category','vendor' , 'vendor_username' , 'title' , 'slug' , 'tag_list' , 'detail' , 'price', 'product_rating' , 'product_imgs' , 'demo_url']
        depth = 1

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
        
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields= ['id', 'customer']
        depth = 1
        
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields= ['id','order','product']
        depth = 1
        
class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerAddress
        fields= ['id','customer','address', 'default_address']
        depth = 1
        

class ProductRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductRating
        fields= ['id','customer','product', 'rating' , 'reviews' , 'add_time']
        depth = 1
        


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields= ['id', 'title','details']
        depth = 1
        
class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields= ['id','title','details']
        depth = 1
        
