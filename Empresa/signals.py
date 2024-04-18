from django.db.models.signals import pre_save,post_save,pre_delete
from django.dispatch import receiver
from .models import Empresa,CreacionEmpresa,ActualizacionEmpresa,EliminacionEmpresa

@receiver(post_save, sender=Empresa)
def TriggerCreacion(sender, instance, created, **kwargs):
    if created:
        CreacionEmpresa.objects.create(EmpId=instance.id,EmpNombre=instance.EmpNombre)
            
@receiver(pre_save, sender=Empresa)
def TriggerPreActualizacion(sender, instance, **kwargs):
    try:
        old_instance = sender.objects.get(pk=instance.pk)
    except sender.DoesNotExist:
        return
    updated_fields = []
    for field in instance._meta.fields:
        if getattr(old_instance, field.attname) != getattr(instance, field.attname):
            updated_fields.append(field.attname)
    setattr(instance, '_updated_fields', updated_fields)
        
@receiver(post_save, sender=Empresa)
def TriggerPostActualizacion(sender, instance, created, **kwargs):
    if not created:
        updated_fields = getattr(instance, '_updated_fields', [])
        if updated_fields:
            actualizacion = ActualizacionEmpresa(
                EmpId=instance.id,
                EmpNombre=instance.EmpNombre,
                EmpModificacion=", ".join(updated_fields)
            )
            actualizacion.save()
        delattr(instance, '_updated_fields')        
        
@receiver(pre_delete, sender=Empresa)      
def TriggerEliminacion(sender, instance, **kwargs):
    EliminacionEmpresa.objects.create(EmpId=instance.id,EmpNombre=instance.EmpNombre)
               
