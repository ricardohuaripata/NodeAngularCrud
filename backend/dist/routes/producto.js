"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controller/producto");
// http://localhost:3000/api/productos/
const router = (0, express_1.Router)();
router.get('/', producto_1.getProductos),
    router.get('/:id', producto_1.getProducto),
    router.delete('/:id', producto_1.deleteProducto),
    router.post('/', producto_1.postProducto),
    router.put('/:id', producto_1.putProducto);
exports.default = router;
