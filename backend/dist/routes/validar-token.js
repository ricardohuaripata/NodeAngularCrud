"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarToken = (req, res, next) => {
    console.log("Validando token");
    const headerToken = req.headers['authorization'];
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            const bearerToken = headerToken.slice(7); // recortar string para obtener solo el token
            jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'BbBveqBA4UIL2k&Y'); //validar token no expirado y no corrupto
            next(); //continuar con el siguiente proceso
            console.log("Valid Token");
        }
        catch (error) {
            res.status(401).json({
                msg: "Invalid Token"
            });
        }
    }
    else {
        res.status(401).json({
            msg: "Acesso denegado"
        });
    }
};
exports.default = validarToken;
