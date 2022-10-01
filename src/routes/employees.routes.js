import { Router } from 'express'
// import { createEmployees, deleteEmployees, getEmployee, getEmployees, getUsers, updateEmployees } from '../controllers/employees.controller.js'
import { createUsers, deleteUsers, getUser, getUsers, updateUsers } from '../controllers/employees.controller.js'

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)

router.post('/users', createUsers)
router.patch('/users/:id', updateUsers)
router.delete('/users/:id', deleteUsers)

export default router