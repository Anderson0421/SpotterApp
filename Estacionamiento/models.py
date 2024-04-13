from django.db import models
from Empresa.models import Empresa
class Estacionamiento(models.Model):
    EstUbicacion = models.CharField(max_length=100)
    EstCapacidadMaxima = models.IntegerField()
    EstCapacidadActual = models.IntegerField()
    EstEmpresaNombre =models.ForeignKey(Empresa, on_delete=models.CASCADE,to_field='EmpNombre',db_column='EstEmpresaNombre')
    def __str__(self):
        return self.EstUbicacion