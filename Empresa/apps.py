from django.apps import AppConfig


class EmpresaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Empresa'
    def ready(self):
        import Empresa.signals