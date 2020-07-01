import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import Exercises from "../entity/Exercises";

class ExercisesController {

    
    async store(request: Request, response: Response, next: NextFunction) {
        try {
            const exercisesRepository = getRepository(Exercises);
            const {name_exercise, description_exercise} = await exercisesRepository.save(request.body);
            return response.status(201).json({
                name_exercise,
                description_exercise
            })
        } catch (error) {
            console.log('erro ao criar exercício: ', error);
            
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