import { Router } from 'express';
import { nuevoUsuario, loginUsuario, getUsuarios} from '../controller/usuario';
import validarToken from './validar-token';

// http://localhost:3000/api/usuarios/

const router = Router();

router.get('/', validarToken, getUsuarios),
router.post('/', nuevoUsuario),
router.post('/login', loginUsuario)


export default router;
