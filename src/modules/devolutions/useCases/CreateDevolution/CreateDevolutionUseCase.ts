import { Devolution } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateDevolutionDTO } from "../../dtos/CreateDevolutionDTO";
import { AppError } from "../../../../errors/error";

export class CreateDevolutionUseCase {
    async execute({rentId, description}: CreateDevolutionDTO ): Promise<Devolution> {
        const devolutionAlreadyExists = await prisma.devolution.findMany({
            where: {
                rentId
            }
        });

        if(devolutionAlreadyExists.length > 0) {
            throw new AppError("Devolution already exists");
        }

        const devolution = await prisma.devolution.create({
            data: {
                rentId,
                devolutionAt: new Date(),
                description
            }
        });

        // Atualiza o status da rent após a criação da devolution
        
        const statusRent = await prisma.rent.update({
            where: {
                id: rentId
            },
            data: {
                status: false
            }
        });

        if (!statusRent) {
            throw new AppError("Error updating rent status");
        }

        return devolution;
    }
}