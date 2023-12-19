import { Request, Response } from "express";
import { ViewActiveRentUseCase } from "./ViewActiveRentUseCase";

export class ViewActiveRentController {
    async handle(req:Request, res:Response) {
        const viewActiveRentUseCase = new ViewActiveRentUseCase();

        const result = await viewActiveRentUseCase.execute();

        return res.status(201).json(result)
    }
}