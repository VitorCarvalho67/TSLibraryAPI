import { Router } from 'express';
import { CreateRentController } from '../modules/rents/useCases/CreateRent/CreateRentController';

const createRentController = new CreateRentController();

const RentRoutes = Router();

RentRoutes.post('/', createRentController.handle);

export { RentRoutes };