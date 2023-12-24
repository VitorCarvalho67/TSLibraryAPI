import { Router } from 'express';
import { userRoutes } from './user.routes';
import { BookRoutes } from './book.routes';
import { AuthorRoutes } from './author.routes';
import { RentRoutes } from './rent.routes';
import { AvaliationRoutes } from './avaliation.routes';
import { DevolutionRoutes } from './devolution.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/books', BookRoutes);
routes.use('/authors', AuthorRoutes);
routes.use('/rents', RentRoutes);
routes.use('/avaliations', AvaliationRoutes);
routes.use('/devolutions', DevolutionRoutes)

export { routes };