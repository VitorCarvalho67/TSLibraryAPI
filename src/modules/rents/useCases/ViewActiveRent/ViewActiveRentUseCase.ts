import { Rent } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/error";

export class ViewActiveRentUseCase {
    async execute(): Promise<Rent[]> {
        const data = new Date();
        
        const rents = await prisma.rent.findMany({
            where: {
                returnAt: {
                    gte: data
                }
            }
        });

        return rents;
    }
}