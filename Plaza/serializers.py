from rest_framework import serializers
from .models import Plaza,CreacionPlaza,ActualizacionPlaza,EliminacionPlaza

class PlazaSerializer(serializers.ModelSerializer):
    class Meta:
        unique_together = (("PlazaNumero", "PlazaEstUbicacion"),)
        model = Plaza
        fields = '__all__'
        
class CreacionPlazaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreacionPlaza
        fields = '__all__'
        
class ActualizacionPlazaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActualizacionPlaza
        fields = '__all__'
        
class EliminacionPlazaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EliminacionPlaza
        fields = '__all__'