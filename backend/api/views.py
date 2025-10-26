from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.serializer import CompanySerializer
from api.models import Company
from rest_framework import viewsets

# Create your views here.

@api_view(['GET'])
def index(request):
    return Response('hello word')

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer