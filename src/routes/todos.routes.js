import { Router } from 'express'

const router = Router()

router.get('/todos/:id',getTodoId )
router.post('/todos/:id/task', createTask)

export default router