import { Router } from 'express'

const router = Router()

router.get('/employees', (req, res) => res.send('Get employees'))
router.post('/employees', (req, res) => res.send('Post employees'))
router.put('/employees', (req, res) => res.send('Put/Update employees'))
router.delete('/employees', (req, res) => res.send('Delete employees'))

export default router