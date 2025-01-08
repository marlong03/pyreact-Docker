# Usamos la imagen base de Python
FROM python:3.11-slim

# Variables de entorno
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app/django

# Copiamos el archivo requirements.txt al contenedor
COPY ./requirements.txt /app/django/

# Instalamos pip y las dependencias de Python
RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

# Copiamos el resto de los archivos de la aplicación al contenedor
COPY ./djangoproject /app/django/djangoproject

# Exponemos el puerto donde el backend correrá
EXPOSE 8000
WORKDIR /app/django/djangoproject

# Comando para ejecutar el servidor de Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
