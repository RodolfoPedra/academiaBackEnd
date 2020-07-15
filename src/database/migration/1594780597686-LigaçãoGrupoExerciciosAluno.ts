import {MigrationInterface, QueryRunner} from "typeorm";

export class LigaçãoGrupoExerciciosAluno1594780597686 implements MigrationInterface {
    name = 'LigaçãoGrupoExerciciosAluno1594780597686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "group_exercise_student" ("studentId" integer NOT NULL, "groupExerciseId" integer, "exerciseId" integer, "specsId" integer, "specsStudentId" integer, CONSTRAINT "PK_efce315f7853d9dea3cd75e1747" PRIMARY KEY ("studentId"))`);
        await queryRunner.query(`ALTER TABLE "group_exercise_student" ADD CONSTRAINT "FK_e4d5965151c8fab22608425df81" FOREIGN KEY ("groupExerciseId") REFERENCES "group_exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_exercise_student" ADD CONSTRAINT "FK_efd9140e75fa7773737dbbe5f38" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_exercise_student" ADD CONSTRAINT "FK_154a3b292d5c48abb9b81d49232" FOREIGN KEY ("specsId") REFERENCES "specs_exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_exercise_student" ADD CONSTRAINT "FK_0bfc09e02fc263be8f10b4b4d93" FOREIGN KEY ("specsStudentId") REFERENCES "specs_exercises_student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group_exercise_student" DROP CONSTRAINT "FK_0bfc09e02fc263be8f10b4b4d93"`);
        await queryRunner.query(`ALTER TABLE "group_exercise_student" DROP CONSTRAINT "FK_154a3b292d5c48abb9b81d49232"`);
        await queryRunner.query(`ALTER TABLE "group_exercise_student" DROP CONSTRAINT "FK_efd9140e75fa7773737dbbe5f38"`);
        await queryRunner.query(`ALTER TABLE "group_exercise_student" DROP CONSTRAINT "FK_e4d5965151c8fab22608425df81"`);
        await queryRunner.query(`DROP TABLE "group_exercise_student"`);
    }

}
