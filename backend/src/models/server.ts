import express, {Request, Response} from 'express';

//importante usar cors para la conexion con el frontend
import cors from 'cors';
import routerProducto from '../routes/producto';
import routerUsuario from '../routes/usuario';
import database from '../database/connection';
import dotenv from 'dotenv';

//configurar variables de entorno
dotenv.config();

class Server {

    private app: express.Application;
    private port: string;

    constructor() {
        // todas las funcionas definidas para esta clase deberan llamarse en su constructor,
        // para que se ejecuten cuando la clase Server sea instanciada en "backend/src/index.ts"
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();

        this.routes();
        this.dbConexion();
    }
    //funcion para establecer el puerto del servidor
    listen() {
        this.app.listen(this.port, () => {
        console.log(`Server listening on port ` + this.port)
        });
    }
    //funcion donde asignamos las rutas del servidor
    routes() {
        // localhost:3000
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                mensaje: "Hola mundo"
            })
        });
        // localhost:3000/api/productos
        // si se accede a esa ruta, se llama a la clase routerProducto, la cual contiene otras rutas para get,post,delete y put
        this.app.use('/api/productos', routerProducto);
        this.app.use('/api/usuarios', routerUsuario);

    }


    midlewares() {
        // PARSEAR EL BODY EN JSON
        this.app.use(express.json());

        // SOLUCIONAR PROBLEMA CORS
        this.app.use(cors());
    }

    //funcion para comprobar la conexion con la base de datos
    async dbConexion() {

        try {
            // sync, crea la tabla si no existe
            //await Usuario.sync();
            await database.authenticate();
            console.log("Base de datos conectada :)");

        }catch(error) {
            console.log("Error al conectarse con la base de datos :(");

        }
    }

}

export default Server;