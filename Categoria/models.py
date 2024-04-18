from django.db import models

class Categoria(models.Model):
    CatTitulo = models.CharField(max_length=100)
    CatLogo = models.TextField()
    def __str__(self):
        return self.CatTitulo