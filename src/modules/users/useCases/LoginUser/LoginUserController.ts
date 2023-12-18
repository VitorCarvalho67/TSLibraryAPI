import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
    async handle(req:Request, res:Response) {
        const { email, password } = req.body;

        const loginUserUseCase = new LoginUserUseCase();

        const result = await loginUserUseCase.execute({ email, password });

        return res.status(201).json(result)
    }
}