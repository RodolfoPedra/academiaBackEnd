import { Router } from 'express';
import ExercisesController from './controller/ExercisesController';
import GroupExercisesController from './controller/GroupExercisesController';
import RegisterStudentController from './controller/RegisterStudentController';
import SpecsExercisesController from './controller/SpecsExercisesController';
import GroupAndExercises from './controller/GroupAndExercises';
import ExerciseAndSpecs from './controller/ExerciseAndSpecs';

const routes = Router();

routes.get('/exercicio', ExercisesController.findAll);
routes.get('/exercicio/:id', ExercisesController.findOne);
routes.post('/exercicio', ExercisesController.create);
routes.delete('/exercicio/:id', ExercisesController.remove);
routes.put('/exercicio/:id', ExercisesController.update);

routes.get('/grupo-exercicio', GroupExercisesController.findAll);
routes.get('/grupo-exercicio/:id', GroupExercisesController.findOne);
routes.post('/grupo-exercicio', GroupExercisesController.create);
routes.delete('/grupo-exercicio/:id', GroupExercisesController.remove);
routes.put('/grupo-exercicio/:id', GroupExercisesController.update);

routes.get('/aluno', RegisterStudentController.findAll);
routes.post('/aluno', RegisterStudentController.create);
routes.delete('/aluno/:id', RegisterStudentController.remove);
routes.put('/aluno/:id', RegisterStudentController.update);

routes.get('/especificao-exercicio', SpecsExercisesController.findAll);
routes.post('/especificao-exercicio', SpecsExercisesController.create);
routes.delete('/especificao-exercicio/:id', SpecsExercisesController.remove);
routes.put('/especificao-exercicio/:id', SpecsExercisesController.update);

routes.post('/relacao-grupo/:id', GroupAndExercises.create);
routes.delete('/relacao-grupo/:id', GroupAndExercises.remove);

routes.post('/relacao-exercicio/:id', ExerciseAndSpecs.create);
routes.get('/relacao-exercicio/:id', ExerciseAndSpecs.store);
// routes.delete('/relacao-exercicio/:id', ExerciseAndSpecs.remove);

export default routes;
