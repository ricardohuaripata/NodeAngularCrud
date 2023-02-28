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
exports.loginUsuario = exports.nuevoUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt")); // hashear password
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// GET ALL USERS
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaUsuarios = yield usuario_1.default.findAll();
    res.json(listaUsuarios);
});
exports.getUsuarios = getUsuarios;
// REGISTRAR USUARIO
const nuevoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, firstname, lastname, email } = req.body;
    // validar username unico
    const user = yield usuario_1.default.findOne({ where: { username: username } }); // select * from user where username = username
    if (user != null) {
        return res.status(400).json({
            msg: "El nombre de usuario '" + username + "' ya está cogido"
        });
    }
    // SI USERNAME ES VALIDO, SIGUE
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield usuario_1.default.create({
            username: username,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname,
            email: email
        });
        res.json({
            msg: "Usuario '" + username + "' registrado con exito",
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Parece que algo ha ido mal",
            error
        });
    }
});
exports.nuevoUsuario = nuevoUsuario;
// LOGEAR USUARIO
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // validar si existe el usuario
    const user = yield usuario_1.default.findOne({ where: { username: username } }); // select * from user where username = username
    if (user == null) {
        return res.status(400).json({
            msg: "No existe ningún usuario llamado '" + username + "'"
        });
    }
    // validar password
    const validPassword = yield bcrypt_1.default.compare(password, user.password);
    if (validPassword == false) {
        return res.status(400).json({
            msg: "Contraseña incorrecta"
        });
    }
    // generar token
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'BbBveqBA4UIL2k&Y');
    res.json(token);
});
exports.loginUsuario = loginUsuario;
