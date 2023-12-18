import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { LoginUserDTO } from "../../dtos/LoginUserDTO";

const bcrypt = require('bcrypt');

export class LoginUserUseCase {
    async execute({ email, password }: LoginUserDTO): Promise<User> {

        const user = await prisma.user.findFirst({
            where: {
                email,
            }
        });

        if (!user) {
            throw new Error("User not found or password incorrect");
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            throw new Error("User not found or password incorrect");
        }

        return user;
    }
}
