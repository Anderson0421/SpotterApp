from django.shortcuts import render
from rest_framework import generics
from .models import Estacionamiento,CreacionEstacionamiento,ActualizacionEstacionamiento,EliminacionEstacionamiento
from .serializers import EstacionamientoSerializer,CreacionEstacionamientoSerializer,ActualizacionEstacionamientoSerializer,EliminacionEstacionamientoSerializer

class EstacionamientoListCreateAPIView(generics.ListCreateAPIView):
    queryset = Estacionamiento.objects.all()
    serializer_class = EstacionamientoSerializer
    
class EstacionamientoRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Estacionamiento.objects.all()
    serializer_class = EstacionamientoSerializer



class CreacionEstacionamientoListAPIView(generics.ListAPIView):
    queryset = CreacionEstacionamiento.objects.all()
    serializer_class = CreacionEstacionamientoSerializer

class ActualizacionEstacionamientoListAPIView(generics.ListAPIView):
    queryset = ActualizacionEstacionamiento.objects.all()
    serializer_class = ActualizacionEstacionamientoSerializer
    
class EliminacionEstacionamientoListAPIView(generics.ListAPIView):
    queryset = EliminacionEstacionamiento.objects.all()
    serializer_class = EliminacionEstacionamientoSerializer