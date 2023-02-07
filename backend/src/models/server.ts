import express, {Request, Response} from 'express';
import routerProducto from '../routes/producto';
import database from '../database/connection';

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();

        this.routes();
        this.dbConexion();
    }

    listen() {
        this.app.listen(this.port, () => {
        console.log(`Server listening on port ${this.port}`)
        });
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                mensaje: "Hola mundo"
            })
        });
        this.app.use('/api/productos', routerProducto);
    }


    midlewares() {
        this.app.use(express.json());
    }

    async dbConexion() {

        try {
            await database.authenticate();
            console.log("Base de datos conectada :)");

        }catch(error) {
            console.log("Error al conectarse con la base de datos :(");

        }
    }


}

export default Server;