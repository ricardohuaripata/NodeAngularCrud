import { Request, Response } from "express"

export const getProductos = (req: Request, res: Response) => {

    res.json({
        message: "get productos"

    })

}

export const getProducto = (req: Request, res: Response) => {

    res.json({
        message: "get a producto",
        id: req.params.id

    })

}

export const deleteProducto = (req: Request, res: Response) => {

    res.json({
        message: "delete a producto",
        id: req.params.id

    })

}

export const postProducto = (req: Request, res: Response) => {

    res.json({
        message: "post a producto",
        body: req.body

    })

}

export const putProducto = (req: Request, res: Response) => {

    res.json({
        message: "post a producto",
        id: req.params.id,
        body: req.body

    })

}