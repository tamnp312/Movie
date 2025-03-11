import jwt  from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId , res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, {
        expiresIn: '7d',
    });

    res.cookie('token_user_movie', token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
        secure: ENV_VARS.NODE_ENV !== 'development', 
    });

    return token;
};

