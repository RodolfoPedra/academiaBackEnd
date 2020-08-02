import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import Exercises from '../models/Exercises';
import SpecsExercises from '../models/SpecsExercises';
import SpecsExercisesStudent from '../models/SpecsExercisesStudent';

class ExerciseAndSpecs {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const specsTotal = [];
      const repoExercise = getRepository(Exercises);
      const repoSpecs = getRepository(SpecsExercises);
      const repoSpecsStudent = getRepository(SpecsExercisesStudent);

      const exercise = await repoExercise.findOne(req.params.id, {
        relations: ['specs'],
      });

      for (let i = 0; i < exercise.specs.length; i++) {
        specsTotal.push(await repoSpecs.findOne(exercise.specs[i].id));
      }

      for (let id of req.body.id) {
        specsTotal.push(await repoSpecs.findOne(id));
      }

      exercise.specs = specsTotal;

      repoExercise.save(exercise);

      return res.status(200).json({ ok: 'Salvou, aeee!' });
    } catch (error) {
      return res.json({ error: `deu erro ${error}` });
    }
  }

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const repo = getRepository(Exercises);
      const exercises = await repo.findOne(req.params.id, {
        relations: ['specs'],
      });

      return res.status(201).json(exercises.specs.length);
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new ExerciseAndSpecs();
