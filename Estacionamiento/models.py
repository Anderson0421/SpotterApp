from django.db import models
from Empresa.models import Empresa
class Estacionamiento(models.Model):
    EstUbicacion = models.CharField(max_length=100, unique=True)
    EstEmpresaId =models.ForeignKey(Empresa, on_delete=models.CASCADE,to_field='id',db_column='EstEmpresaId',default=1)
    EstEstado = models.BooleanField(default=True)
    def __str__(self):
        return self.EstUbicacion
    
class CreacionEstacionamiento(models.Model):
    EstId = models.IntegerField(default=1)
    EstUbicacion = models.CharField(max_length=100)
    EstFechaCreacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Creacion de {self.EstUbicacion}"
    
class ActualizacionEstacionamiento(models.Model):
    EstId = models.IntegerField(default=1)
    EstUbicacion = models.CharField(max_length=100)
    EstModificacion = models.TextField(default="")
    EstFechaActualizacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Actualizacion de {self.EstUbicacion}"

class EliminacionEstacionamiento(models.Model):
    EstId = models.IntegerField(default=1)
    EstUbicacion = models.CharField(max_length=100)
    EstFechaEliminacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Eliminacion de {self.EstUbicacion}"