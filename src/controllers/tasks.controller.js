import { Tasks } from '../models/Tasks.js'

export const getTasks = async (req, res) => {
  try {
    // throw new Error('Algo salio mal')
    const task = await Tasks.findAll()
    res.json(task)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Tasks.findOne({
      where: { id_task: id, },
    });

    if (!task) return res.status(404).json({ message: "Task doesn't exists" })
    res.json(task)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createTask = async (req, res) => {

  const { title, completed, todoID, userID } = req.body

  try {
    const newTask = await Tasks.create({
      title,
      completed,
      todoID,
      userID
    });

    res.json(newTask)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Tasks.findByPk(id)

    task.set(req.body);
    await task.save() //Guardamos en la BBDD
    res.json(task)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Tasks.destroy({
      where: {
        id_task: id,  //Donde id de la tabla igual al request
      },
    });

    if (!task) return res.status(404).json({ message: "Task doesn't exists" })
    res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
