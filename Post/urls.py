from django.urls import path
from .views import PostListCreateAPIView,PostRetrieveUpdateDestroyAPIView
urlpatterns = [
    path('options/',PostListCreateAPIView.as_view(),name='crear_listar_post'),
    path('options/<int:pk>',PostRetrieveUpdateDestroyAPIView.as_view(),name='actualizar_eliminar_post')
]
