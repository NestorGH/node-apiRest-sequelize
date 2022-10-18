// import { createPool } from 'mysql2/promise' //Usando promesas con el mysql para los async
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../config.js'
import Sequelize from 'sequelize'

//Conexion a la BBDD de mysql con sequelize
export const sequelize = new Sequelize(
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
  });

//Conexion a la BBDD de mysql con un objeto "pool/s
// export const pool = createPool({
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   port: DB_PORT,
//   database: DB_DATABASE
// })

