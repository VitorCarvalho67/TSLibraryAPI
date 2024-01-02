import { Router } from 'express';
import { CreateAuthorController } from '../modules/authors/useCases/CreateAuthor/CreateAuthorController';
import { adminAuthMiddleware } from '../middleware/adminAutentication';

const createAuthorController = new CreateAuthorController();

const AuthorRoutes = Router();

AuthorRoutes.post('/', adminAuthMiddleware, createAuthorController.handle); // criar um autor

export { AuthorRoutes };