import { Book } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/error";

export class ViewAllBooksUseCase {
    async execute(): Promise<Book[]> {
        const books = await prisma.book.findMany({
            
            include: {
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        
        if (!books) {
            throw new AppError("No books found");
        }

        return books.map(book => {
            return {
                ...book,
            }
        });
    }

}