from django.shortcuts import render
from rest_framework import generics
from .models import Empresa,CreacionEmpresa,ActualizacionEmpresa,EliminacionEmpresa
from .serializers import EmpresaSerializer,CreacionEmpresaSerializer,ActualizacionEmpresaSerializer,EliminacionEmpresaSerializer

class EmpresaListCreateAPIView(generics.ListCreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    
class EmpresaRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer



class CreacionEmpresaListAPIView(generics.ListAPIView):
    queryset = CreacionEmpresa.objects.all()
    serializer_class = CreacionEmpresaSerializer

class ActualizacionEmpresaListAPIView(generics.ListAPIView):
    queryset = ActualizacionEmpresa.objects.all()
    serializer_class = ActualizacionEmpresaSerializer
    
class EliminacionEmpresaListAPIView(generics.ListAPIView):
    queryset = EliminacionEmpresa.objects.all()
    serializer_class = EliminacionEmpresaSerializer