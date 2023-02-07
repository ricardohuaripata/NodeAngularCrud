"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putProducto = exports.postProducto = exports.deleteProducto = exports.getProducto = exports.getProductos = void 0;
const getProductos = (req, res) => {
    res.json({
        message: "get productos"
    });
};
exports.getProductos = getProductos;
const getProducto = (req, res) => {
    res.json({
        message: "get a producto",
        id: req.params.id
    });
};
exports.getProducto = getProducto;
const deleteProducto = (req, res) => {
    res.json({
        message: "delete a producto",
        id: req.params.id
    });
};
exports.deleteProducto = deleteProducto;
const postProducto = (req, res) => {
    res.json({
        message: "post a producto",
        body: req.body
    });
};
exports.postProducto = postProducto;
const putProducto = (req, res) => {
    res.json({
        message: "post a producto",
        id: req.params.id,
        body: req.body
    });
};
exports.putProducto = putProducto;
