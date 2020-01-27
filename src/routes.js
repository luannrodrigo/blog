import { Router } from 'express';

// import dos controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PostController from './app/controllers/PostController';

// import middlewares
import authMiddleware from './app/middleware/auth';

// constantes
const routes = new Router();

// Rotas
routes.post('/sessions', SessionController.store);
routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);

// load authentication middlewares
routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/posts', PostController.store);
routes.put('/posts/:id', PostController.update);
routes.delete('/posts/:id', PostController.delete);

export default routes;
