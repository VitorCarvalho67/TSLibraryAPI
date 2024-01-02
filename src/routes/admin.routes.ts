import { Router } from 'express';
import { CreateAdminController } from '../modules/admins/useCases/CreateAdmin/CreateAdminController';
import { LoginAdminController } from '../modules/admins/useCases/LoginAdmin/LoginAdminController';

const createAuthorController = new CreateAdminController();
const loginAdminController = new LoginAdminController();

const AdminRoutes = Router();

AdminRoutes.post('/', createAuthorController.handle);
AdminRoutes.post('/login', loginAdminController.handle);

export { AdminRoutes };