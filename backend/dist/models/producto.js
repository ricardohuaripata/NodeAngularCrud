"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Producto = connection_1.default.define('Producto', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
    },
    precio: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    existencias: {
        type: sequelize_1.DataTypes.NUMBER,
    }
}, {
    // SEQUELIZE POR DEFECTO TRAE LOS CAMPOS `id`, `createdAt`, `updatedAt`
    // SI NO QUEREMOS LOS CAMPOS `createdAt`, `updatedAt`, HAY QUE ASIGNARLOS A 'false'
    createdAt: false,
    updatedAt: false,
    //nombre tabla Productos
    tableName: 'Productos'
});
exports.default = Producto;
