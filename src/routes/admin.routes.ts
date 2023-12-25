import { Router } from 'express';
import { CreateAdminController } from '../modules/admins/useCases/CreateAdmin/CreateAdminController';

const createAuthorController = new CreateAdminController();

const AdminRoutes = Router();

AdminRoutes.post('/', createAuthorController.handle);

export { AdminRoutes };