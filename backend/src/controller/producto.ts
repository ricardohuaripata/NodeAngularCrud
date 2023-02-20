import { Request, Response } from "express";
import Producto from '../models/producto';
import { Op } from "sequelize";

export const getProductos = async (req: Request, res: Response) => {
    
    const listaProductos = await Producto.findAll();
    // {listaProductos} :(
    res.json(listaProductos);

}

export const getProducto = async (req: Request, res: Response) => {

    const id = req.params.id;
    const product = await Producto.findByPk(id);

    if(product) {
        res.json(product);
    } else {
        res.status(404).json({mensaje: 'Producto no encontrado con el id ' + id});
    }

}

export const getProductosByName = async (req: Request, res: Response) => {
    const nombre = req.params.nombre;
  
    try {
      const productos = await Producto.findAll({
        where: {
          nombre: {
            [Op.like]: '%' + nombre + '%'
          }
        }
      });
  
      res.json(productos);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al buscar productos.' });
    }
  };

export const deleteProducto = async (req: Request, res: Response) => {

    const id = req.params.id;
    const product = await Producto.findByPk(id);

    if(product) {
        await product.destroy();
        res.json({mensaje: 'Producto eliminado con el id ' + id});
    } else {
        res.status(404).json({mensaje: 'Producto no encontrado con el id ' + id});
    }

}

export const postProducto = async (req: Request, res: Response) => {

    const body = req.body;

    try {
        const nuevoProducto = await Producto.create(body);
        res.json(nuevoProducto);

    } catch(error) {
        res.json({mensaje: 'Error al insertar el producto'});
    }

}

export const putProducto = async (req: Request, res: Response) => {

    const body = req.body;
    const id = req.params.id;
    const product = await Producto.findByPk(id);

    if(product) {

        try {
            await product.update(body);
            res.json({mensaje: 'Producto actualizado con el id '+ id});

        } catch(error) {
            res.json({mensaje: 'Error al actualizar el producto'});
     
        }
        
    } else {
        res.status(404).json({mensaje: 'Producto no encontrado con el id ' + id});
    }

}