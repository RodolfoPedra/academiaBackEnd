import {getRepository, Repository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import Exercises from "../entity/Exercises";


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

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(Exercises);
            const exercise = await repo.findOne(req.params.id);
            await repo.remove(exercise);
            return res.json({ok: "Dados removidos com sucesso"});
        } catch (error) {
            console.log('erro ao buscar exercícios: ', error);                    
        }

    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const repo  = getRepository(Exercises);
            const exercise = await repo.findOne(req.params.id);
            await repo.update(exercise, req.body);
        } catch (error) {
            
        }
    }

    // async one(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.findOne(request.params.id);
    // }

    // async save(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.save(request.body);
    // }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOne(request.params.id);
    //     await this.userRepository.remove(userToRemove);
    // }

}

export default new ExercisesController();