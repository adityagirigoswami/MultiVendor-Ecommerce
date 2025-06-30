from django.db import models
from django.contrib.auth.models import User
from slugify import slugify


# vendor model

class Vendor(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    address = models.TextField(null = True)
    
    
    def __str__(self):
        return self.user.username
    
# product category

class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    details = models.TextField(null=True)
    image=models.ImageField(upload_to='category_imgs/' , null=True)

    def __str__(self):
        return self.title

# products
   
class Product(models.Model):
    category = models.ForeignKey(ProductCategory , on_delete=models.SET_NULL , null = True , related_name='category_product')
    vendor = models.ForeignKey(Vendor , on_delete=models.SET_NULL , null = True)
    title = models.CharField(max_length=200)
    slug= models.CharField(max_length=300,unique=True,null=True)
    detail = models.TextField(null=True)
    price = models.FloatField()
    tags=models.TextField(null=True)
    image=models.ImageField(upload_to='product_imgs/' , null=True)
    demo_url = models.URLField(null=True , blank=True)
    file = models.FileField(upload_to='scripts/', null=True, blank=True)  # ✅ Add this

    def __str__(self):
        return self.title
    
    def tag_list(self):
        if self.tags:
            return self.tags.split(',')
        return []
    
    def save(self, *args, **kwargs):
        if not self.slug and self.title:
            base_slug = slugify(self.title)
            unique_slug = base_slug
            counter = 1
            while Product.objects.filter(slug=unique_slug).exists():
                unique_slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = unique_slug
        super().save(*args, **kwargs)


# customer model

class Customer(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()
    
    def __str__(self):
        return self.user.username
# order model

class Order(models.Model):
    customer = models.ForeignKey(Customer , on_delete=models.CASCADE)
    Order_time= models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Order of {self.customer.user.username} | Order ID: {self.id}"

# wishlist model 
class Wishlist(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='wishlists')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    added_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('customer', 'product')

    def __str__(self):
        return f"{self.customer.user.username} - {self.product.title}"
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order , on_delete=models.CASCADE,related_name = 'order_items')
    product = models.ForeignKey(Product , on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.product.title} (Order ID: {self.order.id})"

class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE , related_name="Customer_Address")
    address = models.TextField()
    default_address= models.BooleanField(default=False)
    
    def __str__(self):
        return self.address
    
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE,related_name="rating_customers")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_rating")
    rating = models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'
    

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_imgs")
    image = models.ImageField(upload_to='product_imgs/' , null=True)
    
    def __str__(self):
        return self.image.url
    
