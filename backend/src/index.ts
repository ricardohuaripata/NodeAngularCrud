import Server from "./models/server";
import dotenv from 'dotenv';

//configuramos las variables de ambiente
dotenv.config();

const server = new Server();