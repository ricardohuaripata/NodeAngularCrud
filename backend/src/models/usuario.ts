import { DataTypes } from 'sequelize'
import database from '../database/connection';

const Usuario = database.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // SEQUELIZE POR DEFECTO TRAE LOS CAMPOS `id`, `createdAt`, `updatedAt`
    //nombre tabla Usuarios
    tableName: 'Usuarios'
});

export default Usuario;