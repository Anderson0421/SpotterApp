from rest_framework import serializers
from .models import Estacionamiento,CreacionEstacionamiento,ActualizacionEstacionamiento,EliminacionEstacionamiento

class EstacionamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estacionamiento
        fields = '__all__'
        
class CreacionEstacionamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreacionEstacionamiento
        fields = '__all__'
        
class ActualizacionEstacionamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActualizacionEstacionamiento
        fields = '__all__'
        
class EliminacionEstacionamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EliminacionEstacionamiento
        fields = '__all__'