# Generated by Django 4.0.1 on 2024-04-13 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Empresa', '0002_empresa_empresaestado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empresa',
            name='EmpresaNombre',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]