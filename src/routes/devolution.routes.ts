import { Router } from 'express';
import { CreateDevolutionController } from '../modules/devolutions/useCases/CreateDevolution/CreateDevolutionController';

const createDevolutionController = new CreateDevolutionController();

const DevolutionRoutes = Router();

DevolutionRoutes.post('/', createDevolutionController.handle);

export { DevolutionRoutes };