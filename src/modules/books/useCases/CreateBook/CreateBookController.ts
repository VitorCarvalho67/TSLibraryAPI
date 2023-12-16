import { Request, Response } from "express";
import { CreateBookUseCase } from "./CreateBookUseCase";

export class CreateBookController {
    async handle(req:Request, res:Response) {
        const { barcode, title, authorId, price } = req.body;

        const createBookUseCase = new CreateBookUseCase();

        const result = await createBookUseCase.execute({ barcode, title, authorId, price });

        return res.status(201).json(result)
    }
}