import {Router} from 'express';
import ExercisesController from './controller/ExercisesController';

const routes = Router();

routes.get('/exercicio', ExercisesController.findAll);
routes.post('/exercicio', ExercisesController.create);
routes.delete('/exercicio/:id', ExercisesController.remove);

export default routes;

