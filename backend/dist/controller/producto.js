"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putProducto = exports.postProducto = exports.deleteProducto = exports.getProductosByName = exports.getProducto = exports.getProductos = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const sequelize_1 = require("sequelize");
// GET
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaProductos = yield producto_1.default.findAll();
    // {listaProductos} :(
    res.json(listaProductos);
});
exports.getProductos = getProductos;
// GET BY ID
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ mensaje: 'Producto no encontrado con el id ' + id });
    }
});
exports.getProducto = getProducto;
// GET BY NAME
const getProductosByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let nombre = req.params.nombre || ''; //  si se llama la ruta sin proporcionar un nombre, el valor por defecto sera una cadena vacia
    const esNombreValido = /^[a-zA-Z0-9\s]+$/.test(nombre.trim()); // expresión regular para validar que nombre solo contiene letras, números y espacios
    try {
        let productos;
        if (esNombreValido && nombre.trim() !== '') { // Se agrega un chequeo para evitar que se busquen espacios vacíos
            productos = yield producto_1.default.findAll({
                where: {
                    nombre: {
                        [sequelize_1.Op.like]: '%' + nombre.trim() + '%'
                    }
                }
            });
        }
        else {
            productos = yield producto_1.default.findAll();
        }
        res.json(productos);
    }
    catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar productos.' });
    }
});
exports.getProductosByName = getProductosByName;
// DELETE
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        yield product.destroy();
        res.json({ mensaje: 'Producto eliminado con el id ' + id });
    }
    else {
        res.status(404).json({ mensaje: 'Producto no encontrado con el id ' + id });
    }
});
exports.deleteProducto = deleteProducto;
// POST
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const nuevoProducto = yield producto_1.default.create(body);
        res.json(nuevoProducto);
    }
    catch (error) {
        res.json({ mensaje: 'Error al insertar el producto' });
    }
});
exports.postProducto = postProducto;
// PUT
const putProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const id = req.params.id;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        try {
            yield product.update(body);
            res.json({ mensaje: 'Producto actualizado con el id ' + id });
        }
        catch (error) {
            res.json({ mensaje: 'Error al actualizar el producto' });
        }
    }
    else {
        res.status(404).json({ mensaje: 'Producto no encontrado con el id ' + id });
    }
});
exports.putProducto = putProducto;
