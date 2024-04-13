from django.urls import path
from .views import EmpresaListCreateAPIView,EmpresaRetrieveUpdateDestroyAPIView
urlpatterns = [
    path('options/',EmpresaListCreateAPIView.as_view(),name='crear_listar_emp'),
    path('options/<int:pk>',EmpresaRetrieveUpdateDestroyAPIView.as_view(),name='actualizar_eliminar_emp')
]
