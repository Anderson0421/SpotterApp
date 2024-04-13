from django.shortcuts import render
from rest_framework import generics
from .models import Empresa
from .serializers import EmpresaSerializer

class EmpresaListCreateAPIView(generics.ListCreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    
class EmpresaRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
