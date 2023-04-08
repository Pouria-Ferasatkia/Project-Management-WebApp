const express = require('express')
const router = express.Router()
const userController = require('../controllers/Controller')
const {IsAuth} = require('../middleware/IsAuth')
const {IsAdmin} = require('../middleware/IsAdmin')
const {notes,publish,deleteAll,noteId,register,login,getUsers} = userController


router.get('/notes',IsAuth, notes)
router.get('/note/:id',IsAuth, noteId)
router.post('/login', login)
router.post('/register', register)
router.get('/delete/All',IsAuth,IsAdmin, deleteAll)
router.get('/getUsers',IsAuth,IsAdmin, getUsers)
router.post('/publish',IsAuth,IsAdmin, publish)



module.exports = router;