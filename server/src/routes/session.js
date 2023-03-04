import express from 'express'
const router = express.Router()
import { login, register } from '../controllers/session.js'

router.post('/register', register)
router.post('/login', login)

export default router