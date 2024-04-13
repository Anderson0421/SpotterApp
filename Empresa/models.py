from django.db import models

class Empresa(models.Model):
    EmpresaNombre = models.CharField(max_length=100)
    EmpresaDireccionPrincipal = models.CharField(max_length=128)
    EmpresaRUC = models.CharField(max_length=20)
    EmpresaCorreo = models.CharField(max_length=100)
    EmpresaTelefono = models.CharField(max_length=20)
    EmpresaNombreCreador = models.CharField(max_length=50)
    EmpresaDNICreador = models.CharField(max_length=20)
    EmpresaDescripcion = models.TextField()
    EmpresaAsunto = models.TextField()
    EmpresaEstado = models.BooleanField(default=False)
    def __str__(self):
        return self.EmpresaNombre