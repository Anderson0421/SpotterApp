from django.urls import path
from .views import EmpresaListCreateAPIView,EmpresaRetrieveUpdateDestroyAPIView,CreacionEmpresaListAPIView,ActualizacionEmpresaListAPIView,EliminacionEmpresaListAPIView
urlpatterns = [
    path('options/',EmpresaListCreateAPIView.as_view(),name='crear_listar_emp'),
    path('options/<int:pk>',EmpresaRetrieveUpdateDestroyAPIView.as_view(),name='actualizar_eliminar_emp'),
    path('options/creations/',CreacionEmpresaListAPIView.as_view(),name='listar_creations'),
    path('options/updates/',ActualizacionEmpresaListAPIView.as_view(),name='listar_creations'),
    path('options/eliminations/',EliminacionEmpresaListAPIView.as_view(),name='listar_creations')
]
