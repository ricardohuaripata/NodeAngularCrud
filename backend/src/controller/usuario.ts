import { Request, Response } from "express";
import Usuario from '../models/usuario';
import bcrypt from 'bcrypt'; // hashear password
import jwt from 'jsonwebtoken';

// GET ALL USERS
export const getUsuarios = async (req: Request, res: Response) => {
    
    const listaUsuarios = await Usuario.findAll();
    res.json(listaUsuarios);

}

// REGISTRAR USUARIO
export const nuevoUsuario = async (req: Request, res: Response) => {
    
    const { username, password, firstname, lastname, email} = req.body;

    // validar username unico
    const user = await Usuario.findOne( { where: { username: username } }) // select * from user where username = username
    
    if(user != null) {
        return res.status(400).json({
            msg: "El nombre de usuario '" + username + "' ya está cogido"
        })
    }

    // SI USERNAME ES VALIDO, SIGUE
    const hashedPassword = await bcrypt.hash(password, 10);

    try {

        await Usuario.create({
            username: username,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname,
            email: email
        })
    
        res.json({
            msg: "Usuario '" + username + "' registrado con exito",
        }
        );

    } catch(error) {
        res.status(400).json({
            msg: "Parece que algo ha ido mal",
            error
        })

    }

}

// LOGEAR USUARIO
export const loginUsuario = async (req: Request, res: Response) => {

    const { username, password} = req.body;

    // validar si existe el usuario

    const user: any = await Usuario.findOne( { where: { username: username } }) // select * from user where username = username

    if(user == null) {
        return res.status(400).json({
            msg: "No existe ningún usuario llamado '" + username + "'"
        })
    }

    // validar password

    const validPassword = await bcrypt.compare(password, user.password);

    if(validPassword == false) {
        return res.status(400).json({
            msg: "Contraseña incorrecta"
        })
    }

    // generar token

    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'BbBveqBA4UIL2k&Y')

    res.json(token);

}