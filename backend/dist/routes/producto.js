"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controller/producto");
const validar_token_1 = __importDefault(require("./validar-token"));
// http://localhost:3000/api/productos/
const router = (0, express_1.Router)();
router.get('/', validar_token_1.default, producto_1.getProductos),
    router.get('/:id', validar_token_1.default, producto_1.getProducto),
    router.get('/name/like/:nombre?', validar_token_1.default, producto_1.getProductosByName),
    router.delete('/:id', validar_token_1.default, producto_1.deleteProducto),
    router.post('/', validar_token_1.default, producto_1.postProducto),
    router.put('/:id', validar_token_1.default, producto_1.putProducto);
exports.default = router;
