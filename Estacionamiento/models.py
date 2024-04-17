from django.db import models
from Empresa.models import Empresa
class Estacionamiento(models.Model):
    EstUbicacion = models.CharField(max_length=100, unique=True)
    EstEmpresaNombre =models.ForeignKey(Empresa, on_delete=models.CASCADE,to_field='EmpNombre',db_column='EstEmpresaNombre')
    EstEstado = models.BooleanField(default=True)
    def __str__(self):
        return self.EstUbicacion
    
class CreacionEstacionamiento(models.Model):
    EstUbicacion = models.CharField(max_length=100)
    EstFechaCreacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Creacion de {self.EstUbicacion}"
    
class ActualizacionEstacionamiento(models.Model):
    EstUbicacion = models.CharField(max_length=100)
    EstModificacion = models.TextField(default="")
    EstFechaActualizacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Actualizacion de {self.EstUbicacion}"

class EliminacionEstacionamiento(models.Model):
    EstUbicacion = models.CharField(max_length=100)
    EstFechaEliminacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Eliminacion de {self.EstUbicacion}"