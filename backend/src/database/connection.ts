import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

//configurar variables de entorno
dotenv.config();

// verifica que todas las variables de entorno necesarias estén definidas
if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_HOST) {
  throw new Error('Faltan variables de entorno');
}

// crea la conexión a la base de datos
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

export default sequelize;