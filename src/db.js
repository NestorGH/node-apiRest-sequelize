import {createPool} from 'mysql2/promise' //Usando promesas con el mysql para los async
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config.js'

//Conexion a la BBDD de mysql con un objeto "pool"
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE
})

