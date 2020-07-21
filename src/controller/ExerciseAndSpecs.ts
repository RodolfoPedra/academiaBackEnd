import {getRepository} from "typeorm";
import { Request, Response, NextFunction } from "express";
import Exercises from "../models/Exercises";
import SpecsExercises from "../models/SpecsExercises";
import SpecsExercisesStudent from "../models/SpecsExercisesStudent";

class ExerciseAndSpecs {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const repoExercise = getRepository(Exercises);
            const repoSpecs = getRepository(SpecsExercises);
            const repoSpecsStudent = getRepository(SpecsExercisesStudent);

            const exercise = await repoExercise.findOne(req.params.id);

            exercise.specs = [await repoSpecs.findOne(req.body.id)];

            repoExercise.save(exercise);

            return res.status(200).json({ok: "Salvou, aeee!"});
            
        } catch (error) {
            return res.json({error: `deu erro ${error}`})
        }
    }
}

export default new ExerciseAndSpecs();