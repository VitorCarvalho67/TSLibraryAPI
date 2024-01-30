import { Rent } from "@prisma/client";
import prisma  from "../../../../prisma/client";
import { AppError } from "../../../../errors/error";

export class ViewActiveRentUseCase {
    async execute(): Promise<Rent[]> {
        
        const today = new Date();

        const rents = await prisma.rent.findMany({
            where: {
                returnAt: {
                    gte: today
                }
            },
            include: {
                book: true
            }
        });

        if (!rents) {
            throw new AppError("No rents found");
        }

        return rents.map(rent => {
            const returnDate = new Date(rent.returnAt);
            const diffTime = Math.abs(returnDate.getTime() - today.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

            return {
                ...rent,
                book: {
                    bookTitle: rent.book.title,
                    rentDays: diffDays
                }
            }
        });
    }
}