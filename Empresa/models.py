from django.db import models

class Empresa(models.Model):
    EmpNombre = models.CharField(max_length=100, unique=True)
    EmpDireccionPrincipal = models.CharField(max_length=128)
    EmpRUC = models.CharField(max_length=20)
    EmpCorreo = models.CharField(max_length=100)
    EmpTelefono = models.CharField(max_length=20)
    EmpNombreCreador = models.CharField(max_length=50)
    EmpDNICreador = models.CharField(max_length=20)
    EmpDescripcion = models.TextField()
    EmpAsunto = models.TextField()
    EmpEstado = models.BooleanField(default=False)
    def __str__(self):
        return self.EmpNombre