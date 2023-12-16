import { Author } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateAuthorDTO } from "../../dtos/CreateAuthorDTO";
import { AppError } from "../../../../errors/error";

export class CreateAuthorUseCase {
    async execute({name}: CreateAuthorDTO ): Promise<Author> {
        const AuthorAlreadyExists = await prisma.author.findUnique({
            where: {
                name
            }
        });

        if (AuthorAlreadyExists) {
            throw new AppError("Author already exists");
        }

        const Author = await prisma.author.create({
            data: {
                name
            }
        });

        return Author;
    }
}