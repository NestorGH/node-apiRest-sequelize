import { Router } from 'express'
import { createEmployees, deleteEmployees, getEmployee, getEmployees, updateEmployees } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)
router.patch('/employees/:id', updateEmployees)
router.delete('/employees/:id', deleteEmployees)

export default router