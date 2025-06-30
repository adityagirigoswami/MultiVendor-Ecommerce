from rest_framework import serializers
from . import models
from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
    
# -> vendor signup
class VendorSignupSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    password = serializers.CharField(write_only=True, source='user.password')

    class Meta:
        model = models.Vendor
        fields = ['username', 'email', 'password', 'address']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(
            username=user_data['username'],
            email=user_data['email'],
            password=user_data['password']
        )
        vendor = models.Vendor.objects.create(user=user, **validated_data)
        return vendor
# -> customer signup
class CustomerRegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True, min_length=6)
    email = serializers.EmailField(write_only=True)
    first_name = serializers.CharField(write_only=True)
    last_name = serializers.CharField(write_only=True)
    mobile = serializers.CharField(write_only=True)

    class Meta:
        model = models.Customer
        fields = ['first_name', 'last_name', 'username', 'email', 'password', 'mobile']

    def create(self, validated_data):
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        password = validated_data.pop('password')
        mobile = validated_data.pop('mobile')

        # Create user
        user = User.objects.create_user(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password

        )

        # Create customer
        customer = models.Customer.objects.create(user=user, mobile=mobile)
        return customer

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
        fields= ['id','category','vendor' , 'vendor_username' , 'title' , 'slug', 'tag_list','detail' , 'price' , 'product_rating', 'image','file']

  

class ProductDetailSerializer(serializers.ModelSerializer):
    vendor_username = serializers.CharField(source='vendor.user.username', read_only=True)
    product_rating= serializers.StringRelatedField(many=True , read_only=True)
    product_imgs=ProductImageSerializer(many=True , read_only=True)   
    class Meta:
        model = models.Product
        fields= ['id','category','vendor' , 'vendor_username' , 'title' , 'slug' , 'tag_list' , 'detail' , 'price', 'product_rating' , 'product_imgs' , 'demo_url' , 'image' ,'file']
        depth = 1

class CustomerSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = models.Customer
        fields= ['id', 'user','username','mobile']
        # depth = 1
        
class CustomerDetailSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = models.Customer
        fields= ['id','user','username','mobile']
        # depth = 1



class WishlistSerializer(serializers.ModelSerializer):
    product = ProductDetailSerializer()  # nested product data
    class Meta:
        model = models.Wishlist
        fields = ['id', 'product', 'added_on']  # no need to expose customer here

                
class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItem
        fields= ['id','order','product']
        depth = 1
        
class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = models.Order
        fields= ['id', 'customer' , 'order_items']
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
        fields= ['id', 'title','details' , 'image']
        depth = 1
        
class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields= ['id','title','details']
        depth = 1
        
