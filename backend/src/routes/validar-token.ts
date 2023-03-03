import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const validarToken = (req: Request, res: Response, next: NextFunction) => {

    console.log("Validando token")

    const headerToken = req.headers['authorization'];

    if(headerToken != undefined && headerToken.startsWith('Bearer ')) {

        try {
            const bearerToken = headerToken.slice(7); // recortar string para obtener solo el token
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'BbBveqBA4UIL2k&Y') //validar token no expirado y no corrupto
            next(); //continuar con el siguiente proceso
            console.log("Valid Token")

        } catch (error) {
            res.status(401).json({
                msg: "Invalid Token"
            })
        }


    } else {
        res.status(401).json({
            msg: "Acceso denegado"
        })

    }

}

export default validarToken;