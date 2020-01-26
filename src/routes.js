import { Router } from 'express';

// import dos controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// import middlewares
import authMiddleware from './app/middleware/auth';

// constantes
const routes = new Router();

// Rotas
routes.post('/sessions', SessionController.store);

// load authentication middlewares
routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

export default routes;
