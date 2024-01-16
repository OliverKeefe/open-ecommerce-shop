from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from typing import List

from .models import Product

from .products import products
from .serializers import ProductSerializer
from django.shortcuts import get_object_or_404


# Create your views here.
@api_view(["GET"])
def get_routes(request) -> List[str]:
    routes = [
        "/api/products/",
        "/api/products/create/",
        "/api/products/upload/",
        "/api/products/<id>/reviews/",
        "/api/products/top/",
        "/api/products/<id>/",
        "/api/products/delete/<id>/",
        "/api/products/<update>/<id>/",
        "/api/product/<id>",
    ]
    return Response(routes)


@api_view(["GET"])
def get_products(request):
    product = Product.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_product(request, pk):
    # Querying the database for the product
    product = get_object_or_404(Product, pk=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)
