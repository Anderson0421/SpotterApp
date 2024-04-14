# Generated by Django 4.0.1 on 2024-04-13 20:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Empresa', '0004_rename_empresaasunto_empresa_empasunto_and_more'),
        ('Estacionamiento', '0002_alter_estacionamiento_estacionamientoempresanombre'),
    ]

    operations = [
        migrations.RenameField(
            model_name='estacionamiento',
            old_name='EstacionamientoCapacidadActual',
            new_name='EstCapacidadActual',
        ),
        migrations.RenameField(
            model_name='estacionamiento',
            old_name='EstacionamientoCapacidadMaxima',
            new_name='EstCapacidadMaxima',
        ),
        migrations.RenameField(
            model_name='estacionamiento',
            old_name='EstacionamientoUbicacion',
            new_name='EstUbicacion',
        ),
        migrations.RemoveField(
            model_name='estacionamiento',
            name='EstacionamientoEmpresaNombre',
        ),
        migrations.AddField(
            model_name='estacionamiento',
            name='EstEmpresaNombre',
            field=models.ForeignKey(default='Sin Empresa', on_delete=django.db.models.deletion.CASCADE, to='Empresa.empresa', to_field='EmpNombre'),
        ),
    ]