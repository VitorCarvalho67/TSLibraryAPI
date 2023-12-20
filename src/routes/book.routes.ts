import { Router } from 'express';
import { CreateBookController } from '../modules/books/useCases/CreateBook/CreateBookController';
import { ViewAllBooksController } from '../modules/books/useCases/ViewAllBooks/ViewAllBooksController';

const createBookController = new CreateBookController();
const viewAllBooksController = new ViewAllBooksController();

const BookRoutes = Router();

BookRoutes.post('/', createBookController.handle);
BookRoutes.get('/', viewAllBooksController.handle);

export { BookRoutes };