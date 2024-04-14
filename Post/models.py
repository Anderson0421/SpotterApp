from django.db import models

class Post(models.Model):
    PostTitulo = models.CharField(max_length=100)
    PostDescripcion = models.TextField()
    PostPortada = models.ImageField(upload_to='post/images/')
    PostFechaCreacion = models.DateField()
    def __str__(self):
        return self.PostTitulo
