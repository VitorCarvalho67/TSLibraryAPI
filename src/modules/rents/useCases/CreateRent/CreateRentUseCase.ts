import { Rent } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateRentDTO } from "../../dtos/CreateRentDTO";
import { AppError } from "../../../../errors/error";

export class CreateRentUseCase {
    async execute({userId, bookId}: CreateRentDTO ): Promise<Rent> {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        // Verifica se o usuário existe
        const UserExists = await prisma.user.findFirst({
            where: {
                id: userId
            }
        });

        // Verifica se o livro existe
        const BookExists = await prisma.book.findFirst({
            where: {
                id: bookId
            }
        });

        // Verifica se o livro foi alugado nos últimos 7 dias
        const RentAlreadyExists = await prisma.rent.findFirst({
            where: {
                userId: userId,
                bookId: bookId,
                rentAt: {
                    gte: sevenDaysAgo 
                }
            }
        });
        
        // Verifica se o usuário alugou mais de 5 livros nos últimos 7 dias
        const UserRentingLimit = await prisma.rent.count({
            where: {
                userId: userId,
                rentAt: {
                    gte: sevenDaysAgo 
                }
            }
        });

        if (!UserExists || !BookExists) {
            throw new AppError("User or Book does not exists");
        }

        if (RentAlreadyExists) {
            throw new AppError("Rent already exists");
        }

        if (UserRentingLimit >= 5) {
            throw new AppError("User reached the renting limit");
        }

        const rentat = new Date();
        const returnat = new Date();
        returnat.setDate(returnat.getDate() + 7); 

        const Rent = await prisma.rent.create({
            data: {
                userId,
                bookId,
                rentAt: rentat,
                returnAt: returnat
            }
        });

        return Rent;
    }
}
