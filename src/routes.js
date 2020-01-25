import { Router } from 'express';

// import dos controllers
import UserController from './app/controllers/UserController';

// constantes
const routes = new Router();

// Rotas
routes.post('/users', UserController.store);

export default routes;
