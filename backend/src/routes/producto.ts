import { Router } from 'express';
import { getProductos, getProducto, deleteProducto, postProducto, putProducto, getProductosByName } from '../controller/producto';
import validarToken from './validar-token';

// http://localhost:3000/api/productos/

const router = Router();

router.get('/', validarToken, getProductos),
router.get('/:id', validarToken, getProducto),
router.get('/name/like/:nombre?', validarToken, getProductosByName),
router.delete('/:id', validarToken, deleteProducto),
router.post('/', validarToken, postProducto),
router.put('/:id', validarToken, putProducto)





export default router;
