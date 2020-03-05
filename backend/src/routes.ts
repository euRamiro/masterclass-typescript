import { Router } from 'express';
import userController from './controllers/UserController'

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('funcionando...');
});
routes.get('/users', userController.index);
routes.post('/users', userController.create);

export default routes;