import { Request, Response  } from "express";
import { DeleteAvaliationUseCase } from "./DeleteAvaliationUseCase";

export class DeleteAvaliationController {
    async handle(req:Request, res:Response) {
        const { avaliationId, userId } = req.body;

        const deleteAvaliationUseCase = new DeleteAvaliationUseCase();

        const result = await deleteAvaliationUseCase.execute({ avaliationId, userId });

        return res.status(200).json(result)
    }
}