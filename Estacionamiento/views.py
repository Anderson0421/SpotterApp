from django.shortcuts import render
from rest_framework import generics
from .models import Estacionamiento
from .serializers import EstacionamientoSerializer

class EstacionamientoListCreateAPIView(generics.ListCreateAPIView):
    queryset = Estacionamiento.objects.all()
    serializer_class = EstacionamientoSerializer
    
class EstacionamientoRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Estacionamiento.objects.all()
    serializer_class = EstacionamientoSerializer
