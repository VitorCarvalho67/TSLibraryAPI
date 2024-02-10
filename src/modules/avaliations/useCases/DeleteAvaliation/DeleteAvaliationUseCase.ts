import { Avaliation } from "@prisma/client";
import prisma  from "../../../../prisma/client";
import { DeleteAvaliationDTO } from "../../dtos/DeleteAvaliationDTO";
import { AppError } from "../../../../errors/error";

export class DeleteAvaliationUseCase {
    async execute({avaliationId, userId}: DeleteAvaliationDTO ): Promise<Avaliation> {
        const Avaliation = await prisma.avaliation.findFirst({
            where: {
                id: avaliationId,
                userId
            }
        });

        if(!Avaliation) {
            throw new AppError("Avaliation not found");
        }

        const deletedAvaliation = await prisma.avaliation.delete({
            where: {
                id: avaliationId
            }
        });

        return deletedAvaliation;
    }
}