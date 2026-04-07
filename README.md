# Gestor de Tareas

Una aplicación web para gestionar tareas personales, construida con React en el frontend y Node.js con MongoDB en el backend.

## 🚀 Tecnologías

- **Frontend**: React 18, CSS
- **Backend**: Node.js, Express.js
- **Base de datos**: MongoDB Atlas
- **Otros**: dotenv para variables de entorno

## 📋 Características

- ✅ Agregar nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas
- ✅ Persistencia en MongoDB Atlas
- ✅ Interfaz responsive

## 🛠️ Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- Cuenta en MongoDB Atlas

### Pasos

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/JeanRdgz/gestor-tareas.git
   cd gestor-tareas
   ```

2. **Instala dependencias**:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. **Configura variables de entorno**:
   - Copia `.env.example` a `.env` en la carpeta `backend`:
     ```bash
     cp .env.example backend/.env
     ```
   - Edita `backend/.env` con tu URI de MongoDB Atlas:
     ```
     MONGO_URI=mongodb+srv://tu-usuario:tu-contraseña@tu-cluster.mongodb.net/gestor-tareas?retryWrites=true&w=majority
     ```

4. **Configura MongoDB Atlas**:
   - Crea un cluster gratuito en [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Crea un usuario de base de datos
   - Permite tu IP o usa `0.0.0.0/0` para pruebas
   - Copia la connection string y pégala en `MONGO_URI`

## ▶️ Uso

1. **Inicia el backend**:
   ```bash
   cd backend
   npm start
   ```
   El servidor correrá en `http://localhost:4000`

2. **Inicia el frontend** (en otra terminal):
   ```bash
   cd frontend
   npm start
   ```
   La app estará disponible en `http://localhost:3000`

3. **Usa la aplicación**:
   - Agrega tareas escribiendo en el input y presionando "Agregar"
   - Marca como completada haciendo clic en el checkbox
   - Elimina tareas con el botón "Eliminar"

## 📁 Estructura del proyecto

```
gestor-tareas/
├── backend/           # API REST con Node.js
│   ├── config.js      # Configuración de MongoDB
│   ├── index.js       # Servidor principal
│   └── package.json
├── frontend/          # Aplicación React
│   ├── src/
│   ├── public/
│   └── package.json
├── database/          # Configuraciones de BD (opcional)
├── .env.example       # Ejemplo de variables de entorno
├── .gitignore         # Archivos ignorados por Git
└── README.md          # Este archivo
```

## 🔧 Scripts disponibles

### Backend
- `npm start`: Inicia el servidor

### Frontend
- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Construye la app para producción
- `npm test`: Ejecuta tests

## 🌐 Despliegue

Para producción, considera:
- **Backend**: Heroku, Railway, o Vercel
- **Frontend**: Vercel, Netlify, o GitHub Pages
- **Base de datos**: MongoDB Atlas (ya configurado)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Contacto

JeanRdgz - [Tu GitHub](https://github.com/JeanRdgz)

---

¡Disfruta gestionando tus tareas! 🎯