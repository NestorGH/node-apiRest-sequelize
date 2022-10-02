import { Router } from 'express'
import { createTask, createUsers, deleteUsers, getTodoId, getUser, getUsers, getUsersTodos, updateUsers } from '../controllers/users.controller.js'

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.get('/users/:id/todos', getUsersTodos)

router.post('/users', createUsers)
router.patch('/users/:id', updateUsers)
router.delete('/users/:id', deleteUsers)

router.get('/todos/:id',getTodoId )
router.post('/todos/:id/task', createTask)



export default router