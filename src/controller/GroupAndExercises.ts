import { getRepository, getConnection } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import Exercises from '../models/Exercises';
import GroupExercises from '../models/GroupExercises';

class GroupAndExercises {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const existExercise = [];
      const repoGroups = getRepository(GroupExercises);
      const repoExercises = getRepository(Exercises);

      const group = await repoGroups.findOne(req.params.id, {
        relations: ['exercise'],
      });

      for (let i = 0; i < group.exercise.length; i++) {
        existExercise.push(await repoExercises.findOne(group.exercise[i].id));
      }

      for (let id of req.body.id) {
        existExercise.push(await repoExercises.findOne(id));
      }

      group.exercise = existExercise;
      await repoGroups.save(group);

      return res.status(201).json(group);
    } catch (error) {
      console.log('erro ao criar exercício: ', error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const repo = getRepository(GroupExercises);
      const group = await repo.findOne(req.params.id, {
        relations: ['exercise'],
      });

      for (let id of req.body.id) {
        const actualGroup = group.exercise.filter((ex) => {
          return ex.id != id;
        });
        group.exercise = actualGroup;
        await repo.save(group);
      }

      return res.status(200).json({ ok: 'Excluído com sucesso!' });
    } catch (error) {
      console.log('erro ao remover exercícios: ', error);
    }
  }
}

export default new GroupAndExercises();
