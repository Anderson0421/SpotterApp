from django.db.models.signals import pre_save,post_save,pre_delete
from django.dispatch import receiver
from .models import Plaza,CreacionPlaza,ActualizacionPlaza,EliminacionPlaza

@receiver(post_save, sender=Plaza)
def TriggerCreacion(sender, instance, created, **kwargs):
    if created:
        CreacionPlaza.objects.create(PlazaNumero=instance.PlazaNumero,PlazaEstUbicacion=instance.PlazaEstUbicacion)
      
      
            
@receiver(pre_save, sender=Plaza)
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
        
@receiver(post_save, sender=Plaza)
def TriggerPostActualizacion(sender, instance, created, **kwargs):
    if not created:
        updated_fields = getattr(instance, '_updated_fields', [])
        if updated_fields:
            actualizacion = ActualizacionPlaza(
                PlazaNumero=instance.PlazaNumero,
                PlazaEstUbicacion = instance.PlazaEstUbicacion,
                PlazaEstado=f"Updated to {instance.PlazaEstado}"
            )
            actualizacion.save()
        delattr(instance, '_updated_fields')        

        
        
@receiver(pre_delete, sender=Plaza)      
def TriggerEliminacion(sender, instance, **kwargs):
    EliminacionPlaza.objects.create(PlazaNumero=instance.PlazaNumero,PlazaEstUbicacion=instance.PlazaEstUbicacion)
               