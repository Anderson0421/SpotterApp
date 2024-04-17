from rest_framework import serializers
from .models import Empresa,CreacionEmpresa,ActualizacionEmpresa,EliminacionEmpresa

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'
        

class CreacionEmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreacionEmpresa
        fields = '__all__'
        
class ActualizacionEmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActualizacionEmpresa
        fields = '__all__'
        
class EliminacionEmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EliminacionEmpresa
        fields = '__all__'