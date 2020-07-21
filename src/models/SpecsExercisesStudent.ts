import BaseSpecsExercises from "./BaseSpecsExercises";
import { Entity, ManyToOne } from "typeorm";
import Exercises from "./Exercises";

@Entity('specs_exercises_student')
class SpecsExercisesStudent extends BaseSpecsExercises {

    @ManyToOne(type => Exercises, specsStudent => specsStudent.specsStudent)
    exercise: Exercises;
}

export default SpecsExercisesStudent;