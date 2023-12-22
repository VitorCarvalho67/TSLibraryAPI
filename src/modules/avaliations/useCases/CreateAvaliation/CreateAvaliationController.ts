import { Request, Response } from "express";
import { CreateAvaliationUseCase } from "./CreateAvaliationUseCase";

export class CreateAvaliationController {
    async handle(req:Request, res:Response) {
        const { userId, bookId, avaliationAt, description } = req.body;

        const createAvaliationUseCase = new CreateAvaliationUseCase();

        const result = await createAvaliationUseCase.execute({ userId, bookId, avaliationAt, description });

        return res.status(201).json(result)
    }
}