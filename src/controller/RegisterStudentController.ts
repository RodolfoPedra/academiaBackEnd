import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import RegisterStudent from "../entity/Register_Student";


class ExercisesController {
    
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(RegisterStudent);
            const {name} = await repo.save(req.body);
            return res.status(201).json({name})
        } catch (error) {
            console.log('erro ao criar registro de aluno: ', error);        
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(RegisterStudent);
            const data = await repo.find();

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar registros de alunos: ', error);                    
        }

    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(RegisterStudent);
            const data = await repo.findOne(req.params.id);

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar registro de aluno: ', error);                    
        }

    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(RegisterStudent);
            const exercise = await repo.findOne(req.params.id);
            await repo.remove(exercise);
            return res.json({ok: "Dados removidos com sucesso"});
        } catch (error) {
            console.log('erro ao remover registro de aluno: ', error);                    
        }

    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const repo  = getRepository(RegisterStudent);
            const exercise = await repo.findOne(req.params.id);
            await repo.update(exercise, req.body);
        } catch (error) {
            console.log('erro ao atualizar registro de aluno: ', error);                                
        }
    }

}

export default new ExercisesController();