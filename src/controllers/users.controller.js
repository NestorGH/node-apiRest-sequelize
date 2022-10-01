import { pool } from '../db.js'

export const getUsers = async (req, res) => {

  try {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }

}

export const getUser = async (req, res) => {
  try {
    // console.log(req.params.id) //Guarda los parametros q vengan a traves del url(req), por ejemplo el /:id
    const [rows] = await pool.query('SELECT * FROM users WHERE id_user = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
      message: 'user not found'
    })
    res.json(rows[0])

  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

export const createUsers = async (req, res) => {
  // console.log(req.body) //El cuerpo/objeto de la peticion
  const { firstName, lastName, email } = req.body

  try {
    const [rows] = await pool.query('INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)', [firstName, lastName, email])

    res.send({  //Mandamos la respuesta
      id: rows.insertId,
      firstName,
      lastName,
      email
    })

  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

export const updateUsers = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, email } = req.body

  try {

    const [result] = await pool.query('UPDATE users SET firstName = IFNULL(?, firstName), lastName = IFNULL(?, lastName), email = IFNULL(?, email) WHERE id_user = ?', [firstName, lastName, email, id])
    // console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({
      message: 'user not found'
    })

    const [rows] = await pool.query('SELECT * FROM users WHERE id_user = ?', [id])
    res.json(rows[0])

  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}


export const deleteUsers = async (req, res) => {
  try {
    const [resultado] = await pool.query('DELETE FROM users WHERE id_user = ?', [req.params.id])
    // console.log(resultado)
    if (resultado.affectedRows <= 0) return res.status(404).json({
      message: 'user not found'
    })

    res.sendStatus(204) //Solo mandamos el estado 204. Todo correcto pero no se devuelve nada

  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

//-- GET/users/:id/todos
export const getUsersTodos = async (req, res) => {

  try {
    // console.log(req.params.id) //Guarda los parametros q vengan a traves del url(req), por ejemplo el /:id
    const [rows] = await pool.query('select td.id_todo, td.title, td.keywords, us.id_user from users AS us JOIN todos as td on td.id_user = us.id_user WHERE us.id_user = ? ', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
      message: 'user not found'
    })
    res.json(rows)

  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}

//-- GET/todos/:id
export const getTodoId = async (req, res) => {

  try {
    // console.log(req.params.id) //Guarda los parametros q vengan a traves del url(req), por ejemplo el /:id
    const [rows] = await pool.query('select td.id_todo, td.title, tsk.completed,tsk.id_task, us.id_user from users AS us JOIN todos as td on td.id_user = us.id_user JOIN tasks as tsk on tsk.id_user = td.id_user WHERE td.id_todo = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
      message: 'user not found'
    })
    res.json(rows[0])

  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong'
    })
  }
}