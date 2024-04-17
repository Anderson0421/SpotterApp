from django.shortcuts import render
from rest_framework import generics
from .models import Plaza,CreacionPlaza,ActualizacionPlaza,EliminacionPlaza
from .serializers import PlazaSerializer,CreacionPlazaSerializer,ActualizacionPlazaSerializer,EliminacionPlazaSerializer

class PlazaListCreateAPIView(generics.ListCreateAPIView):
    queryset = Plaza.objects.all()
    serializer_class = PlazaSerializer
    
class PlazaRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Plaza.objects.all()
    serializer_class = PlazaSerializer



class CreacionPlazaListAPIView(generics.ListAPIView):
    queryset = CreacionPlaza.objects.all()
    serializer_class = CreacionPlazaSerializer

class ActualizacionPlazaListAPIView(generics.ListAPIView):
    queryset = ActualizacionPlaza.objects.all()
    serializer_class = ActualizacionPlazaSerializer
    
class EliminacionPlazaListAPIView(generics.ListAPIView):
    queryset = EliminacionPlaza.objects.all()
    serializer_class = EliminacionPlazaSerializer