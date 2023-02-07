import { Router } from 'express';
import { getProductos, getProducto, deleteProducto, postProducto, putProducto } from '../controller/producto';

const router = Router();

router.get('/', getProductos),
router.get('/:id', getProducto),
router.delete('/:id', deleteProducto),
router.post('/', postProducto),
router.put('/:id', putProducto)





export default router;
