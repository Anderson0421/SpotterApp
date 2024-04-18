from django.db.models.signals import pre_save,post_save,pre_delete
from django.dispatch import receiver
from .models import Estacionamiento,CreacionEstacionamiento,ActualizacionEstacionamiento,EliminacionEstacionamiento

@receiver(post_save, sender=Estacionamiento)
def TriggerCreacion(sender, instance, created, **kwargs):
    if created:
        CreacionEstacionamiento.objects.create(EstId=instance.id,EstUbicacion=instance.EstUbicacion)
            
@receiver(pre_save, sender=Estacionamiento)
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
        
@receiver(post_save, sender=Estacionamiento)
def TriggerPostActualizacion(sender, instance, created, **kwargs):
    if not created:
        updated_fields = getattr(instance, '_updated_fields', [])
        if updated_fields:
            actualizacion = ActualizacionEstacionamiento(
                EstId=instance.id,
                EstUbicacion=instance.EstUbicacion,
                EstModificacion=", ".join(updated_fields)
            )
            actualizacion.save()
        delattr(instance, '_updated_fields')        
        
@receiver(pre_delete, sender=Estacionamiento)      
def TriggerEliminacion(sender, instance, **kwargs):
    EliminacionEstacionamiento.objects.create(EstId=instance.id,EstUbicacion=instance.EstUbicacion)
               