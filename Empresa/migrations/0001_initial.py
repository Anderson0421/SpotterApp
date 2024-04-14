# Generated by Django 4.0.1 on 2024-04-13 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('EmpresaNombre', models.CharField(max_length=100)),
                ('EmpresaDireccionPrincipal', models.CharField(max_length=128)),
                ('EmpresaRUC', models.CharField(max_length=20)),
                ('EmpresaCorreo', models.CharField(max_length=100)),
                ('EmpresaTelefono', models.CharField(max_length=20)),
                ('EmpresaNombreCreador', models.CharField(max_length=50)),
                ('EmpresaDNICreador', models.CharField(max_length=20)),
                ('EmpresaDescripcion', models.TextField()),
                ('EmpresaAsunto', models.TextField()),
            ],
        ),
    ]