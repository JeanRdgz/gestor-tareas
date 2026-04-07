// Archivo de configuración para MongoDB
// Aquí puedes agregar configuraciones de conexión, etc.

require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/gestor-tareas'
};