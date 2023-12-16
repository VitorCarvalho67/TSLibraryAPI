import { Request, Response } from "express";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

export class CreateAuthorController {
    async handle(req:Request, res:Response) {
        const { name } = req.body;

        const createAuthorUseCase = new CreateAuthorUseCase();

        const result = await createAuthorUseCase.execute({ name });

        return res.status(201).json(result)
    }
}