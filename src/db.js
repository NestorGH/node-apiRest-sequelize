import {createPool} from 'mysql2/promise' //Usando promesas con el mysql para los async

//Conexion a la BBDD de mysql con un objeto "pool"
export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  port: 3306,
  database: 'companydb'
})

