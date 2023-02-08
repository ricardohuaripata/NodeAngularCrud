import { DataTypes } from 'sequelize'
import database from '../database/connection';

const Producto = database.define('Producto', {
    nombre: {
        type: DataTypes.STRING,
        },
    descripcion: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.DOUBLE,
    },
    existencias: {
        type: DataTypes.NUMBER,
    }
//IMPORTANTE asignar estos 2 atributos a false
}, {
    createdAt: false,
    updatedAt: false
} );

export default Producto;