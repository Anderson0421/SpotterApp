from django.urls import path
from .views import EstacionamientoListCreateAPIView,EstacionamientoRetrieveUpdateDestroyAPIView,CreacionEstacionamientoListAPIView,ActualizacionEstacionamientoListAPIView,EliminacionEstacionamientoListAPIView
urlpatterns = [
    path('options/',EstacionamientoListCreateAPIView.as_view(),name='crear_listar_est'),
    path('options/<int:pk>',EstacionamientoRetrieveUpdateDestroyAPIView.as_view(),name='actualizar_eliminar_est'),
    path('options/creations/',CreacionEstacionamientoListAPIView.as_view(),name='listar_creations'),
    path('options/updates/',ActualizacionEstacionamientoListAPIView.as_view(),name='listar_creations'),
    path('options/eliminations/',EliminacionEstacionamientoListAPIView.as_view(),name='listar_creations')
]
