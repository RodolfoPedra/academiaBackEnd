import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import SpecsExercises from "../entity/Specs_Exercises";


class ExercisesController {
    
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(SpecsExercises);
            const {name} = await repo.save(req.body);
            return res.status(201).json({name})
        } catch (error) {
            console.log('erro ao criar especificações do exercício: ', error);        
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(SpecsExercises);
            const data = await repo.find();

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar especificações do exercício: ', error);                    
        }

    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(SpecsExercises);
            const data = await repo.findOne(req.params.id);

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar especificações do exercício: ', error);                    
        }

    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(SpecsExercises);
            const exercise = await repo.findOne(req.params.id);
            await repo.remove(exercise);
            return res.json({ok: "Dados removidos com sucesso"});
        } catch (error) {
            console.log('erro ao remover especificações do exercício: ', error);                    
        }

    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const repo  = getRepository(SpecsExercises);
            const exercise = await repo.findOne(req.params.id);
            await repo.update(exercise, req.body);
        } catch (error) {
            console.log('erro ao atualizar especificações do exercício: ', error);                                
        }
    }

}

export default new ExercisesController();