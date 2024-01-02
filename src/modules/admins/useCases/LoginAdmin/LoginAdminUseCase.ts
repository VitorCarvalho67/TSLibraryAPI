import { Admin } from '@prisma/client'
import { prisma } from '../../../../prisma/client'
import { LoginAdminDTO } from '../../dtos/LoginAdminDTO'
import { generateAccessToken } from '../../../../jwt/jwtService'

const bcrypt = require('bcrypt')

export class LoginAdminUseCase {
    async execute({ email, password }: LoginAdminDTO): Promise<{token: string, admin: Omit<Admin, 'password'>}> {

        const admin = await prisma.admin.findFirst({
            where: {
                email,
            }
        });

        if (!admin) {
            throw new Error("Admin not found incorrect");
        }

        const isPasswordValid = bcrypt.compareSync(password, admin.password);

        if (!isPasswordValid) {
            throw new Error("Admin not found or password incorrect");
        }

        const token = generateAccessToken(admin);
        
        if (!token) {
            throw new Error("Error generating token");
        }

        return {token: token, admin: {
            id: admin.id,
            name: admin.name,
            email: admin.email
        }};
    
    }
}