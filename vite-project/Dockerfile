
# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app/frontend

# Copia los archivos del proyecto
COPY . . 

# Instala dependencias
RUN npm install

# Expone el puerto 5173
EXPOSE 5173

# Comando para iniciar el servidor Vite y exponerlo
#CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev", "--", "--host"]

