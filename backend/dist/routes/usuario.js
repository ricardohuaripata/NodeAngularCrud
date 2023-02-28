"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controller/usuario");
const validar_token_1 = __importDefault(require("./validar-token"));
// http://localhost:3000/api/usuarios/
const router = (0, express_1.Router)();
router.get('/', validar_token_1.default, usuario_1.getUsuarios),
    router.post('/', usuario_1.nuevoUsuario),
    router.post('/login', usuario_1.loginUsuario);
exports.default = router;
