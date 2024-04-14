# Generated by Django 4.0.1 on 2024-04-13 20:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Empresa', '0002_empresa_empresaestado'),
    ]

    operations = [
        migrations.CreateModel(
            name='Estacionamiento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('EstacionamientoUbicacion', models.CharField(max_length=100)),
                ('EstacionamientoCapacidadMaxima', models.IntegerField()),
                ('EstacionamientoCapacidadActual', models.IntegerField()),
                ('EstacionamientoEmpresaNombre', models.ForeignKey(db_column='EmpresaNombre', on_delete=django.db.models.deletion.CASCADE, to='Empresa.empresa')),
            ],
        ),
    ]