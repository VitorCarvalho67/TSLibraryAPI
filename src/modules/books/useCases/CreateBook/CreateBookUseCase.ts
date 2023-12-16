import { Book } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateBookDTO } from "../../dtos/CreateBookDTO";
import { AppError } from "../../../../errors/error";

export class CreateBookUseCase {
    async execute({barcode, title, authorId, price}: CreateBookDTO ): Promise<Book> {
        const BookAlreadyExists = await prisma.book.findUnique({
            where: {
                barcode
            }
        });

        if (BookAlreadyExists) {
            throw new AppError("Book already exists");
        }

        const book = await prisma.book.create({
            data: {
                barcode,
                title,
                authorId,
                price
            }
        });

        return book;
    }
}