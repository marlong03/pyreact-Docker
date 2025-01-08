from django.urls import path
from .views import TareaListCreate

urlpatterns = [
    path('tareas/', TareaListCreate.as_view(), name='tarea-list-create'),
]
