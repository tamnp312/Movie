import express from 'express'; 
import * as authController from '../controllers/auth.controller.js';

const router = express.Router(); 

router.post('/signup', authController.singup); 
router.post('/signin', authController.signin); 
router.post('/logout', authController.logout); 

export default router;
