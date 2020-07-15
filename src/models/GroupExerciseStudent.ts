import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import RegisterStudent from "./RegisterStudent";
import { type } from "os";
import GroupExercises from "./GroupExercises";
import Exercises from "./Exercises";
import SpecsExercises from "./SpecsExercises";
import SpecsExercisesStudent from "./SpecsExercisesStudent";


@Entity('group_exercise_student')
class GroupExerciseStudent {

    @PrimaryColumn()
    studentId: number;

    @ManyToOne(type => GroupExercises, groupExecStudent => GroupExerciseStudent)
    groupExercise: GroupExercises;

    @ManyToOne(type => Exercises, groupExecStudent => GroupExerciseStudent)
    exercise: Exercises;

    @ManyToOne(type => SpecsExercises, groupExecStudent => GroupExerciseStudent)
    specs: SpecsExercises;
    
    @ManyToOne(type => SpecsExercisesStudent, groupExecStudent => GroupExerciseStudent)
    specsStudent: SpecsExercisesStudent;
}

export default GroupExerciseStudent;