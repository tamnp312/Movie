import express from 'express'; 
import * as authController from '../controllers/auth.controller.js';
import protectRouter from './../middleware/protectRouter.js';

const router = express.Router(); 

router.post('/signup', authController.singup); 
router.post('/signin', authController.signin); 
router.post('/logout', authController.logout); 
router.get('/authCheck',protectRouter, authController.authCheck); 


export default router;
