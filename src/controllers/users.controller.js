// import { pool } from '../db/db.js'
import { Users } from '../models/Users.js'

export const getUsers = async (req, res) => {
  try {
    // throw new Error('Algo salio mal')
    const users = await Users.findAll()
    res.json(users)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await Users.findOne({
      where: { id_user: id, },
    });

    if(!user) return res.status(404).json({message: "User doesn't exists"})
    res.json(user)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createUsers = async (req, res) => {

  const { firstName, lastName, email } = req.body

  try {
    const newUser = await Users.create({
      firstName,
      lastName,
      email
    });

    res.json(newUser)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { firstName, lastName, email } = req.body

    const user = await Users.findByPk(id)
    user.firstName = firstName
    user.lastName = lastName
    user.email = email

    await user.save() //Guardamos en la BBDD
    res.json(user)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await Users.destroy({
      where: {
        id_user: id,  //Donde id de la tabla igual al request
      },
    });

    if(!user) return res.status(404).json({message: "User doesn't exists"})
    res.sendStatus(204);
    
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}




// //-- GET/users/:id/todos
// export const getUsersTodos = async (req, res) => {

//   try {
//     // console.log(req.params.id) //Guarda los parametros q vengan a traves del url(req), por ejemplo el /:id
//     const [rows] = await pool.query('select td.id_todo, td.title, td.keywords, us.id_user from users AS us JOIN todos as td on td.id_user = us.id_user WHERE us.id_user = ? ', [req.params.id])

//     if (rows.length <= 0) return res.status(404).json({
//       message: 'user not found'
//     })
//     res.json(rows)

//   } catch (error) {
//     return res.status(500).json({
//       message: 'Something goes wrong'
//     })
//   }
// }

// //-- GET/todos/:id
// export const getTodoId = async (req, res) => {

//   try {
//     const [rows] = await pool.query('select td.id_todo, td.title, tsk.completed,tsk.id_task, us.id_user from users AS us JOIN todos as td on td.id_user = us.id_user JOIN tasks as tsk on tsk.id_user = td.id_user WHERE td.id_todo = ?', [req.params.id])

//     if (rows.length <= 0) return res.status(404).json({
//       message: 'user not found'
//     })
//     res.json(rows[0])

//   } catch (error) {
//     return res.status(500).json({
//       message: 'Something goes wrong'
//     })
//   }
// }

// //  POST /todos/:id/task
// export const createTask = async (req, res) => {
//   console.log(req.body) //El cuerpo/objeto de la peticion
//   const { title, completed, id_todo, id_user } = req.body

//   try {
//     const [rows] = await pool.query('INSERT INTO tasks (title,completed,id_todo,id_user) VALUES (?, ?, ?, ?)', [title, completed, id_todo, id_user])
//     // console.log(rows)
//     res.send({  //Mandamos la respuesta
//       // id: rows.insertId,
//       id: rows.insertId,
//       title,
//       completed,
//       id_todo,
//       id_user
//     })

//   } catch (error) {
//     return res.status(500).json({
//       message: 'Something goes wrong'
//     })
//   }
// }