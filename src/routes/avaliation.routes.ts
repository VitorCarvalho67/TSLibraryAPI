import { Router } from 'express';
import { CreateAvaliationController } from '../modules/avaliations/useCases/CreateAvaliation/CreateAvaliationController';
import { userAuthMiddleware } from '../middleware/userAutentication';

const createAvaliationController = new CreateAvaliationController();

const AvaliationRoutes = Router();

AvaliationRoutes.post('/', userAuthMiddleware ,createAvaliationController.handle); // criar uma avaliação

export { AvaliationRoutes };