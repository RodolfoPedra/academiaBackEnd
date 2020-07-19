import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import Exercises from "../models/Exercises";
import GroupExercises from "../models/GroupExercises";

class GroupAndExercises {
    
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const datas = [];
            const existExercise = [];
            const repoGroups = getRepository(GroupExercises);
            const repoExercises = getRepository(Exercises);

            const group = await repoGroups.findOne(req.params.id, {relations: ["exercise"]});

            for(let i = 0; i < group.exercise.length; i++) {
                existExercise.push(await repoExercises.findOne(group.exercise[i].id));
            }

            existExercise.push(await repoExercises.findOne(req.body.id));

            group.exercise = existExercise;          
            await repoGroups.save(group);

            return res.status(201).json(group);
            
        } catch (error) {
            console.log('erro ao criar exercício: ', error);        
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(GroupExercises);
            const data = await repo.find({relations: ["exercise"]});

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar grupo de exercícios: ', error);                    
        }
    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(GroupExercises);
            const data = await repo.findOne(req.params.id, {relations: ["exercise"]});

            return res.status(200).json(data);
        } catch (error) {
            console.log('erro ao buscar grupo de exercícios: ', error);                    
        }
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(GroupExercises);
            const group = await repo.findOne(req.params.id, {relations: ["exercise"]})

            const actualGroup = group.exercise.filter(ex => {
                return ex.id != req.body.id;
            })
            group.exercise = actualGroup;
            await repo.save(group);

            return res.status(200).json({ok : "Excluído com sucesso!"})
        } catch (error) {
            console.log('erro ao remover exercícios: ', error);                    
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const repo = getRepository(Exercises);
            await repo.update(req.params.id, req.body);

            console.log(req.body);

            return res.json({ok: "Alterado com Sucesso"});
            
        } catch (error) {
            console.log('erro ao atualizar exercício: ', error);                                
        }
    }

}

export default new GroupAndExercises();