from django.db import models
from Estacionamiento.models import Estacionamiento
class Plaza(models.Model):
    PlazaNumero = models.IntegerField()
    PlazaEstado =  models.BooleanField(default=True)
    PlazaEstId = models.ForeignKey(Estacionamiento, on_delete=models.CASCADE,to_field='id',db_column='PlazaEstId',default=1)
    def __str__(self):
        return f"{self.PlazaNumero} de Est. n.{self.PlazaEstId}"
    
class CreacionPlaza(models.Model):
    PlazaNumero = models.IntegerField()
    PlazaEstId = models.IntegerField(default=1)
    PlazaFechaCreacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Creacion de {self.PlazaNumero}"
    
class ActualizacionPlaza(models.Model):
    PlazaNumero = models.IntegerField()
    PlazaEstId = models.IntegerField(default=1)
    PlazaEstado = models.CharField(max_length=20)
    PlazaFechaActualizacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Actualizacion de {self.PlazaNumero}"

class EliminacionPlaza(models.Model):
    PlazaNumero = models.IntegerField()
    PlazaEstId = models.IntegerField(default=1)
    PlazaFechaEliminacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Eliminacion de {self.PlazaNumero}"    
    