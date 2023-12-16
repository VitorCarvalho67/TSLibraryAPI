import "express-async-errors";
import express from 'express';
import { routes } from './routes';
import { Request, Response, NextFunction } from 'express';
import { AppError } from './errors/error';
const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    } else {
        response.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    }
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
