import { Router } from 'express';
import { CreateRentController } from '../modules/rents/useCases/CreateRent/CreateRentController';
import { ViewActiveRentController } from '../modules/rents/useCases/ViewActiveRent/ViewActiveRentController';

const createRentController = new CreateRentController();
const viewActiveRentController = new ViewActiveRentController();

const RentRoutes = Router();

RentRoutes.post('/', createRentController.handle);
RentRoutes.get('/ActiveRent', viewActiveRentController.handle);

export { RentRoutes };