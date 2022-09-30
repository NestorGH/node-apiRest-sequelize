import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee')
  res.json(rows)
}


export const createEmployees = async (req, res) => {
  // console.log(req.body) //El cuerpo/objeto de la peticion
  const { name, salary } = req.body
  const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
  res.send({  //Mandamos la respuesta
    id: rows.insertId,
    name,
    salary
  })
}

export const updateEmployees = (req, res) => res.send('Put/Update employees')
export const deleteEmployees = (req, res) => res.send('Delete employees')