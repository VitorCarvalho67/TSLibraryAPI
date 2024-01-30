import { User } from "@prisma/client";
import prisma  from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/error";

const bcrypt = require('bcrypt');

export class CreateUserUseCase {
    async execute({name, email, password}: CreateUserDTO ): Promise<User> {

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hash
            }
        });

        return user;
    }
}