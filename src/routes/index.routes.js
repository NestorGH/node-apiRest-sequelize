import {Router} from 'express'
import { pool } from '../db.js'; //.js si son modulos propios

const router = Router()

//Comprobamos que hay conexion a la BBDD haciendo una consulta cualquiera
//El pool es el objeto de la db
router.get('/ping', async (req, res) => {
  const [result] = await pool.query('SELECT "DUQUECITO Feliz" AS result')
  res.json(result[0])
})

export default router