from django.urls import path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register('address' , views.CustomerAddressViewset)
router.register('ProductRating' , views.ProductRatingViewset)

urlpatterns = [
    # vendors
    path('vendors/' , views.VendorList.as_view()),
    path('vendor/<int:pk>/' , views.VendorDetail.as_view()),
    
    # product
    path('products/' , views.ProductList.as_view()),
    path('product/<int:pk>/' , views.ProductDetail.as_view()),
    
    # product categories
    path('categories/' , views.CategoryList.as_view()),
    path('category/<int:pk>/' , views.CategoryDetail.as_view()),
    
    #customer urls
    path('customers/' , views.CustomerList.as_view()),
    path('customer/<int:pk>/' , views.CustomerDetail.as_view()),
    
    # order
     path('orders/' , views.Order.as_view()),
     path('order/<int:pk>/' , views.OrderItem.as_view()),

]

urlpatterns+=router.urls