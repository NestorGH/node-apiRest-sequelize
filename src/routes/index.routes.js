import {Router} from 'express'
import { ping } from '../controllers/index.controller.js'

const router = Router()

//Comprobamos que hay conexion a la BBDD haciendo una consulta cualquiera
//El pool es el objeto de la db
router.get('/ping', ping)

export default router