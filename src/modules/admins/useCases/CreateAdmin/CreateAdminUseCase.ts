import { Admin } from "@prisma/client";
import prisma  from "../../../../prisma/client";
import { CreateAdminDTO } from "../../dtos/CreateAdminDTO";
import { AppError } from "../../../../errors/error";

const bcrypt = require('bcrypt');

export class CreateAdminUseCase {
    async execute({email, password}: CreateAdminDTO ): Promise<Admin> {
        const AdminAlreadyExists = await prisma.admin.findUnique({
            where: {
                email
            }
        });

        if (AdminAlreadyExists) {
            throw new AppError("Admin already exists");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const Admin = await prisma.admin.create({
            data: {
                email,
                password: hash
            }
        });

        return Admin;
    }
}