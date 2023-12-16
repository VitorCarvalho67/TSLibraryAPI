import { Router } from 'express';
import { CreateAuthorController } from '../modules/authors/useCases/CreateAuthor/CreateAuthorController';

const createAuthorController = new CreateAuthorController();

const AuthorRoutes = Router();

AuthorRoutes.post('/', createAuthorController.handle);

export { AuthorRoutes };