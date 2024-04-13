from django.urls import path
from .views import EstacionamientoListCreateAPIView,EstacionamientoRetrieveUpdateDestroyAPIView
urlpatterns = [
    path('options/',EstacionamientoListCreateAPIView.as_view(),name='crear_listar_est'),
    path('options/<int:pk>',EstacionamientoRetrieveUpdateDestroyAPIView.as_view(),name='actualizar_eliminar_est')
]
