const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller')
const authMiddleware = require('../../middlewares/auth.middleware')

router.get('/',authMiddleware,taskController.filter)
router.post('/',authMiddleware,taskController.create)
router.put('/:id',authMiddleware,taskController.update)
router.delete('/:id',authMiddleware,taskController.remove)
module.exports = router