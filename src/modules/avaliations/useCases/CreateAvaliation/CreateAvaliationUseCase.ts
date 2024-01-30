import { Avaliation } from "@prisma/client";
import prisma  from "../../../../prisma/client";
import { CreateAvaliationDTO } from "../../dtos/CreateAvaliationDTO";
import { AppError } from "../../../../errors/error";

export class CreateAvaliationUseCase {
    async execute({userId, bookId, description}: CreateAvaliationDTO ): Promise<Avaliation> {
        const AvaliationAlreadyExists = await prisma.avaliation.findMany({
            where: {
                userId,
                bookId
            }
        });

        if(AvaliationAlreadyExists.length > 0) {
            throw new AppError("Avaliation already exists");
        }

        const Avaliation = await prisma.avaliation.create({
            data: {
                userId,
                bookId,
                avaliationAt: new Date(),
                description
            }
        });

        return Avaliation;
    }
}