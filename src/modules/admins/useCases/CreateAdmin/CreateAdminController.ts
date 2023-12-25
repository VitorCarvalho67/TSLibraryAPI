import { Request, Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";

export class CreateAdminController {
    async handle(req:Request, res:Response) {
        const { email, password } = req.body;

        const createAdminUseCase = new CreateAdminUseCase();

        const result = await createAdminUseCase.execute({ email, password });

        return res.status(201).json(result)
    }
}