import { Router } from 'express'
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controllers/todos.controller.js'

const router = Router()

router.get('/todos',getTodos)
router.get('/todos/:id', getTodo)

router.post('/todos',createTodo)
router.patch('/todos/:id', updateTodo)
router.delete('/todos/:id',deleteTodo)
// router.post('/todos/:id/task', createTask)

export default router