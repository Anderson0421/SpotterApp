from django.db import models
from Estacionamiento.models import Estacionamiento
class Plaza(models.Model):
    PlazaNumero = models.IntegerField()
    PlazaEstado =  models.BooleanField(default=True)
    PlazaEstUbicacion = models.ForeignKey(Estacionamiento, on_delete=models.CASCADE,to_field='EstUbicacion',db_column='PlazaEstUbicacion')
    def __str__(self):
        return self.PlazaNumero
    
class CreacionPlaza(models.Model):
    PlazaNumero = models.IntegerField()
    PlazaEstUbicacion = models.CharField(max_length=100)
    PlazaFechaCreacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Creacion de {self.PlazaNumero}"
    
class ActualizacionPlaza(models.Model):
    PlazaNumero = models.IntegerField()
    PlazaEstUbicacion = models.CharField(max_length=100)
    PlazaEstado = models.CharField(max_length=20)
    PlazaFechaActualizacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Actualizacion de {self.PlazaNumero}"

class EliminacionPlaza(models.Model):
    PlazaNumero = models.IntegerField()
    PlazaEstUbicacion = models.CharField(max_length=100)
    PlazaFechaEliminacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Eliminacion de {self.PlazaNumero}"    
    