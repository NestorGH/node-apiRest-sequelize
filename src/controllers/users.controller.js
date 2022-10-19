// import { pool } from '../db/db.js'
import { Todos } from '../models/Todos.js'
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

    if (!user) return res.status(404).json({ message: "User doesn't exists" })
    res.json(user)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createUser = async (req, res) => {

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

    if (!user) return res.status(404).json({ message: "User doesn't exists" })
    res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getUserTodos = async (req, res) => {

  try {
    const { id } = req.params
    const todos = await Todos.findAll({ where: { userID: id } }); //La fk
    res.json(todos)

  } catch (error) {
    return res.status(500).json({ message: error.message })

  }
}
