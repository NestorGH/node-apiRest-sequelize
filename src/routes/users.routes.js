import { Router } from 'express'
import { createUsers, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.controller.js'

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)
// router.get('/users/:id/todos', getUsersTodos)

router.post('/users', createUsers)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

// router.get('/todos/:id',getTodoId )
// router.post('/todos/:id/task', createTask)



export default router