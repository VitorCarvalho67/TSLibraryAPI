import { User } from "@prisma/client";
import prisma from "../../../../prisma/client";
import { LoginUserDTO } from "../../dtos/LoginUserDTO";
import { generateAccessToken } from "../../../../jwt/jwtService";

const bcrypt = require('bcrypt');

export class LoginUserUseCase {
    async execute({ email, password }: LoginUserDTO): Promise<{token: string, user: Omit<User, 'password'>}> {

        const user = await prisma.user.findFirst({
            where: {
                email,
            }
        });

        if (!user) {
            throw new Error("User not found incorrect");
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            throw new Error("User not found or password incorrect");
        }

        const token = generateAccessToken(user);
        
        if (!token) {
            throw new Error("Error generating token");
        }

        return {token: token, user: {
            id: user.id,
            name: user.name,
            email: user.email
        }};
    
    }
}
