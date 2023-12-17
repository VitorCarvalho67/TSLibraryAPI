import { Request, Response } from "express";
import { CreateRentUseCase } from "./CreateRentUseCase";

export class CreateRentController {
    async handle(req:Request, res:Response) {
        const { userId, bookId } = req.body;

        const createRentUseCase = new CreateRentUseCase();

        const result = await createRentUseCase.execute({ userId, bookId });

        return res.status(201).json(result)
    }
}