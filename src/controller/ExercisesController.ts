import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import Exercises from "../models/Exercises";


class ExercisesController {
    
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(Exercises);
            const {name_exercise, description_exercise} = await repo.save(req.body);
            return res.status(201).json({
                name_exercise,
                description_exercise
            })
        } catch (error) {
            console.log('erro ao criar exercício: ', error);        
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(Exercises);
            const data = await repo.find();

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar exercícios: ', error);                    
        }

    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(Exercises);
            const data = await repo.findOne(req.params.id);

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar exercício: ', error);                    
        }

    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(Exercises);
            const exercise = await repo.findOne(req.params.id);
            await repo.remove(exercise);

            return res.json({ok: "Dados removidos com sucesso"});
        } catch (error) {
            console.log('erro ao remover exercícios: ', error);                    
        }

    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(Exercises);
            const exercise = await repo.findOne(req.params.id);
            await repo.update(exercise, req.body);

            console.log(req.body);

            return res.json({ok: "Alterado com Sucesso"});
            
        } catch (error) {
            console.log('erro ao atualizar exercício: ', error);                                
        }
    }

}

export default new ExercisesController();