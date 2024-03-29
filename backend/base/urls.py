from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_routes, name="routes"),
    path("products/", views.get_products, name="products"),
    path("product/<int:pk>/", views.get_product, name="product"),
]
