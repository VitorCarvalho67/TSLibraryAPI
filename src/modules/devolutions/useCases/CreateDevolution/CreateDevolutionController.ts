import { Request, Response } from "express";
import { CreateDevolutionUseCase } from "./CreateDevolutionUseCase";

export class CreateDevolutionController {
    async handle(req:Request, res:Response) {
        const { rentId, description } = req.body;

        const createDevolutionUseCase = new CreateDevolutionUseCase();

        const result = await createDevolutionUseCase.execute({ rentId, description });

        return res.status(201).json(result)
    }
}