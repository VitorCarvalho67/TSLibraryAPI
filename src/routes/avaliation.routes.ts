import { Router } from 'express';
import { CreateAvaliationController } from '../modules/avaliations/useCases/CreateAvaliation/CreateAvaliationController';
import { DeleteAvaliationController } from '../modules/avaliations/useCases/DeleteAvaliation/DeleteAvaliationController';
import { userAuthMiddleware } from '../middleware/userAutentication';

const createAvaliationController = new CreateAvaliationController();
const deleteAvaliationController = new DeleteAvaliationController();

const AvaliationRoutes = Router();

AvaliationRoutes.post('/', userAuthMiddleware ,createAvaliationController.handle); // criar uma avaliação
AvaliationRoutes.delete('/delete', userAuthMiddleware, deleteAvaliationController.handle); // deletar uma avaliação

export { AvaliationRoutes };