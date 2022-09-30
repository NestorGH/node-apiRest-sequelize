import { Router } from 'express'
import { createEmployees, deleteEmployees, getEmployees, updateEmployees } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployees)
router.post('/employees', createEmployees)
router.put('/employees', updateEmployees)
router.delete('/employees', deleteEmployees)

export default router