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
const express_1 = __importDefault(require("express"));
//importante usar cors para la conexion con el frontend
const cors_1 = __importDefault(require("cors"));
const producto_1 = __importDefault(require("../routes/producto"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const connection_1 = __importDefault(require("../database/connection"));
const dotenv_1 = __importDefault(require("dotenv"));
//configurar variables de entorno
dotenv_1.default.config();
class Server {
    constructor() {
        // todas las funcionas definidas para esta clase deberan llamarse en su constructor,
        // para que se ejecuten cuando la clase Server sea instanciada en "backend/src/index.ts"
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConexion();
    }
    //funcion para establecer el puerto del servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ` + this.port);
        });
    }
    //funcion donde asignamos las rutas del servidor
    routes() {
        // localhost:3000
        this.app.get('/', (req, res) => {
            res.json({
                mensaje: "Hola mundo"
            });
        });
        // localhost:3000/api/productos
        // si se accede a esa ruta, se llama a la clase routerProducto, la cual contiene otras rutas para get,post,delete y put
        this.app.use('/api/productos', producto_1.default);
        this.app.use('/api/usuarios', usuario_1.default);
    }
    midlewares() {
        // PARSEAR EL BODY EN JSON
        this.app.use(express_1.default.json());
        // SOLUCIONAR PROBLEMA CORS
        this.app.use((0, cors_1.default)());
    }
    //funcion para comprobar la conexion con la base de datos
    dbConexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // sync, crea la tabla si no existe
                //await Usuario.sync();
                yield connection_1.default.authenticate();
                console.log("Base de datos conectada :)");
            }
            catch (error) {
                console.log("Error al conectarse con la base de datos :(");
            }
        });
    }
}
exports.default = Server;
