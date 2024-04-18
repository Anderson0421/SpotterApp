from django.urls import path
from .views import CategoriaListCreateAPIView,CategoriaRetrieveUpdateDestroyAPIView
urlpatterns = [
    path('options/',CategoriaListCreateAPIView.as_view(),name='crear_listar_cat'),
    path('options/<int:pk>',CategoriaRetrieveUpdateDestroyAPIView.as_view(),name='actualizar_eliminar_cat')
]
