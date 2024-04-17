from django.urls import path
from .views import PlazaListCreateAPIView,PlazaRetrieveUpdateDestroyAPIView,CreacionPlazaListAPIView,ActualizacionPlazaListAPIView,EliminacionPlazaListAPIView
urlpatterns = [
    path('options/',PlazaListCreateAPIView.as_view(),name='crear_listar_plaza'),
    path('options/<int:pk>',PlazaRetrieveUpdateDestroyAPIView.as_view(),name='actualizar_eliminar_plaza'),
    path('options/creations/',CreacionPlazaListAPIView.as_view(),name='listar_creations'),
    path('options/updates/',ActualizacionPlazaListAPIView.as_view(),name='listar_creations'),
    path('options/eliminations/',EliminacionPlazaListAPIView.as_view(),name='listar_creations')
]
