import { Request, Response } from "express";
import { ViewAllBooksUseCase } from "./ViewAllBooksUseCase";

export class ViewAllBooksController {
    async handle(req:Request, res:Response) {
        const viewAllBookUseCase = new ViewAllBooksUseCase();

        const result = await viewAllBookUseCase.execute();

        return res.status(201).json(result)
    }
}