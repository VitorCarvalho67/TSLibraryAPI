import { Router } from 'express';
import { CreateAvaliationController } from '../modules/avaliations/useCases/CreateAvaliation/CreateAvaliationController';

const createAvaliationController = new CreateAvaliationController();

const AvaliationRoutes = Router();

AvaliationRoutes.post('/', createAvaliationController.handle);

export { AvaliationRoutes };