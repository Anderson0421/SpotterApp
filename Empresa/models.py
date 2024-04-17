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
    EmpEstado = models.BooleanField(default=True)
    def __str__(self):
        return self.EmpNombre
    
class CreacionEmpresa(models.Model):
    EmpNombre = models.CharField(max_length=100)
    EmpFechaCreacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Creacion de {self.EmpNombre}"
    
class ActualizacionEmpresa(models.Model):
    EmpNombre = models.CharField(max_length=100)
    EmpModificacion = models.TextField(default="")
    EmpFechaActualizacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Actualizacion de {self.EmpNombre}"

class EliminacionEmpresa(models.Model):
    EmpNombre = models.CharField(max_length=100)
    EmpFechaEliminacion = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Eliminacion de {self.EmpNombre}"