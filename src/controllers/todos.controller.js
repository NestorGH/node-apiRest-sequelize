import { Todos } from '../models/Todos.js'


export const getTodos = async (req, res) => {
  try {
    // throw new Error('Algo salio mal')
    const todo = await Todos.findAll()
    res.json(todo)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todos.findOne({
      where: { id_todo: id, },
    });

    if(!todo) return res.status(404).json({message: "Todo doesn't exists"})
    res.json(todo)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createTodo = async (req, res) => {

  const { title, keywords, userID } = req.body

  try {
    const newTodo = await Todos.create({
      title,
      keywords,
      userID
    });

    res.json(newTodo)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todos.findByPk(id)

    todo.set(req.body);
    await todo.save() //Guardamos en la BBDD
    res.json(todo)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todos.destroy({
      where: {
        id_todo: id,  //Donde id de la tabla igual al request
      },
    });

    if(!todo) return res.status(404).json({message: "Todo doesn't exists"})
    res.sendStatus(204);
    
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

