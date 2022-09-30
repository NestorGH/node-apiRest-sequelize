import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee')
  res.json(rows)
}

export const getEmployee = async (req, res) => {
  // console.log(req.params.id) //Guarda los parametros q vengan a traves del url(req), por ejemplo el /:id
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])

  if (rows.length <= 0) return res.status(404).json({
    message: 'Employee not found'
  })

  res.json(rows[0])
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

export const updateEmployees = async (req, res) => {
  const { id } = req.params
  const { name, salary } = req.body

  const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
  // console.log(result)

  if (result.affectedRows === 0) return res.status(404).json({
    message: 'Employee not found'
  })

  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
  res.json(rows[0])

}


export const deleteEmployees = async (req, res) => {
  const [resultado] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
  // console.log(resultado)
  if (resultado.affectedRows <= 0) return res.status(404).json({
    message: 'Employee not found'
  })

  res.sendStatus(204) //Solo mandamos el estado 204. Todo correcto pero no se devuelve nada
}