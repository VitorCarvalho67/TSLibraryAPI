import { Request, Response, NextFunction } from 'express';
import { verfifyAccessToken } from '../jwt/jwtService';
import prisma from '../prisma/client';
import { JwtPayload } from 'jsonwebtoken';

interface RequestWithUser extends Request {
    user?: { id: String};
}

export async function userAuthMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
    try {

        // Authorization: YOUR_JWT_TOKEN

        const token = req.headers.authorization;

        if (!token) {
            throw new Error('Token not found');
        }

        const decoded = verfifyAccessToken(token);

        if (!decoded || typeof decoded === 'string') {
            throw new Error('Invalid token');
        }

        const user = await prisma.user.findUnique({
            where: { id: (decoded as JwtPayload).userId }
        });

        if (!user) {
            throw new Error('User not found');
        } 

        req.user = { id: user.id};

        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}
