const express = require('express')
const router = express.Router()
const userController = require('../controllers/Controller')
const { IsAuth } = require('../middleware/IsAuth')
const {notes,publish,deleteAll,noteId,register,login} = userController


router.get('/notes',IsAuth, notes)
router.get('/:id',IsAuth, noteId)
router.post('/publish',IsAuth, publish)
router.post('/login', login)
router.post('/register', register)
router.get('/delete/All', deleteAll)


module.exports = router;