import {Router} from 'express';
import ExercisesController from './controller/ExercisesController';

const routes = Router();

routes.post('/teste', ExercisesController.store);


export default routes;

