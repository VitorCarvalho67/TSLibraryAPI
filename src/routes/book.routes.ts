import { Router } from 'express';
import { CreateBookController } from '../modules/books/useCases/CreateBook/CreateBookController';

const createBookController = new CreateBookController();

const BookRoutes = Router();

BookRoutes.post('/', createBookController.handle);

export { BookRoutes };