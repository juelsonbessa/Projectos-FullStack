import express from 'express'
import allControllers from '../controllers/controller.js'

const router = express.Router()

router.get('/list-tasks', allControllers.listTaskFront)
router.post('/insert-task', allControllers.insertTaskFront)
router.delete('/del-task/:id', allControllers.delTaskFront)
router.put('/edit-task', allControllers.editTaskFront)

export default router
