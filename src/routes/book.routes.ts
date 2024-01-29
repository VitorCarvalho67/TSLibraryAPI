import { Router } from 'express';
import { CreateBookController } from '../modules/books/useCases/CreateBook/CreateBookController';
import { ViewAllBooksController } from '../modules/books/useCases/ViewAllBooks/ViewAllBooksController';
import { adminAuthMiddleware } from '../middleware/adminAutentication';

const createBookController = new CreateBookController();
const viewAllBooksController = new ViewAllBooksController();

const BookRoutes = Router();

BookRoutes.post('/', adminAuthMiddleware, createBookController.handle); // criar um livro
BookRoutes.get('/', viewAllBooksController.handle); // pegar todos os livros

export { BookRoutes };