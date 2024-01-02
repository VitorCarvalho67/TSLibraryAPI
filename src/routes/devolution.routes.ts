import { Router } from 'express';
import { CreateDevolutionController } from '../modules/devolutions/useCases/CreateDevolution/CreateDevolutionController';
import { userAuthMiddleware } from '../middleware/userAutentication';

const createDevolutionController = new CreateDevolutionController();

const DevolutionRoutes = Router();

DevolutionRoutes.post('/', userAuthMiddleware, createDevolutionController.handle); // criar uma devolução

export { DevolutionRoutes };