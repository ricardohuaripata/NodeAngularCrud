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
}, {
    // SEQUELIZE POR DEFECTO TRAE LOS CAMPOS `id`, `createdAt`, `updatedAt`
    // SI NO QUEREMOS LOS CAMPOS `createdAt`, `updatedAt`, HAY QUE ASIGNARLOS A 'false'
    createdAt: false,
    updatedAt: false,
    //nombre tabla Productos
    tableName: 'Productos'
} );

export default Producto;