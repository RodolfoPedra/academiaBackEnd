import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import GroupExercises from "../entity/Group_Exercises";


class GroupExercisesController {
    
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(GroupExercises);
            const {name_group, description_group} = await repo.save(req.body);
            return res.status(201).json({
                name_group,
                description_group
            })
        } catch (error) {
            console.log('erro ao criar grupo de exercícios: ', error);        
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(GroupExercises);
            const data = await repo.find();

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar grupo de exercícios: ', error);                    
        }

    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(GroupExercises);
            const data = await repo.findOne(req.params.id);

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar grupo de exercícios: ', error);                    
        }

    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(GroupExercises);
            const exercise = await repo.findOne(req.params.id);
            await repo.remove(exercise);
            return res.json({ok: "Dados removidos com sucesso"});
        } catch (error) {
            console.log('erro ao remover grupo de exercícios: ', error);                    
        }

    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const repo  = getRepository(GroupExercises);
            const exercise = await repo.findOne(req.params.id);
            await repo.update(exercise, req.body);
        } catch (error) {
            console.log('erro ao atualizar grupo de exercícios: ', error);                                
        }
    }

}

export default new GroupExercisesController();