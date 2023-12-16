import { Router } from 'express';
import { userRoutes } from './user.routes';
import { BookRoutes } from './book.routes';
import { AuthorRoutes } from './author.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/books', BookRoutes);
routes.use('/authors', AuthorRoutes);

export { routes };