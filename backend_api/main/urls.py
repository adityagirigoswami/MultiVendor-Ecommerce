from django.urls import path
from . import views

from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView,
)
from .views import create_razorpay_order


router = routers.DefaultRouter()

router.register('address' , views.CustomerAddressViewset)
router.register('ProductRating' , views.ProductRatingViewset)

urlpatterns = [
    
    path("download/<int:order_item_id>/", views.DownloadScriptView.as_view(), name="download-script"),


    # payment
    path('razorpay/order/', create_razorpay_order),
    path("place-order/", views.PlaceOrderAPIView.as_view(), name="place_order"),
    path("customer/orders/", views.CustomerOrderListAPIView.as_view()),


    # customer login
    path('customer/profile/', views.CustomerProfileView.as_view(), name='customer_profile'),
    # customer register 
    path('customer/register/', views.CustomerRegisterView.as_view(), name='customer-register'),
    path("customer/dashboard-stats/", views.CustomerDashboardStats.as_view()),


    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', TokenBlacklistView.as_view(), name='token_blacklist'),

    # vendors
    path('vendors/' , views.VendorList.as_view()), 
    path('vendor/<int:pk>/' , views.VendorDetail.as_view()),
    
    # vednor signup
    path('vendor/signup/', views.VendorSignupView.as_view(), name='vendor_signup'),
    path('vendor/profile/', views.VendorProfileView.as_view(), name='vendor_profile'),

    path('vendor/products/', views.VendorProductList.as_view(), name='vendor_products'),

    path('vendor/add-product/', views.VendorAddProduct.as_view(), name='vendor_products'),
    path('vendor/dashboard-stats/', views.SellerDashboardStats.as_view(), name='vendor-stats'),
    path('vendor/products/<int:pk>/delete/', views.DeleteVendorProduct.as_view(), name='vendor-product-delete'),

    # product
    path('products/' , views.ProductList.as_view()),
    path('product/<int:pk>/' , views.ProductDetail.as_view()),
    path('related-product/<int:pk>/' , views.RelatedProductList.as_view()),
    path('products/latest/', views.LatestProductListView.as_view()),
    path('products/expensive/', views.HighPriceProductListView.as_view(), name='expensive-products'),

    path('wishlist/', views.WishlistListCreateView.as_view(), name='wishlist'),
    path('wishlist/<int:pk>/', views.WishlistDeleteView.as_view(), name='wishlist-delete'),

    # product categories
    path('categories/' , views.CategoryList.as_view()),
    path('category/<int:pk>/' , views.CategoryDetail.as_view()),
    
    #customer urls 
    path('customers/' , views.CustomerList.as_view()),
    path('customer/<int:pk>/' , views.CustomerDetail.as_view()),
    
    # order
     path('orders/' , views.Order.as_view()),
    path("order-items/<int:pk>/", views.OrderItem.as_view(), name="order-items"),

]

urlpatterns+=router.urls