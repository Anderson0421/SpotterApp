from django.db import models
from Categoria.models import Categoria

class Post(models.Model):
    PostTitulo = models.CharField(max_length=100)
    PostDescripcion = models.TextField()
    PostPortada = models.ImageField(upload_to='post/images/')
    PostContenido = models.TextField(default="")
    PostFechaCreacion = models.DateTimeField(auto_now_add=True)
    PostCategoriaId = models.ForeignKey(Categoria, on_delete=models.CASCADE,to_field='id',db_column='PostCategoriaId',default=1)
    def __str__(self):
        return self.PostTitulo
