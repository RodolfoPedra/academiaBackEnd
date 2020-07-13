import {MigrationInterface, QueryRunner} from "typeorm";

export class RelaçãoNNGrupoComExercicios1594669827626 implements MigrationInterface {
    name = 'RelaçãoNNGrupoComExercicios1594669827626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercises" DROP CONSTRAINT "FK_ce6973215ba86f96c1541031f29"`);
        await queryRunner.query(`CREATE TABLE "group_exercises_exercise_exercises" ("groupExercisesId" integer NOT NULL, "exercisesId" integer NOT NULL, CONSTRAINT "PK_cd34653f22ed157f59401fac853" PRIMARY KEY ("groupExercisesId", "exercisesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3e573cd97657497556483eb781" ON "group_exercises_exercise_exercises" ("groupExercisesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_dfaef32508b40c1259b5b11e63" ON "group_exercises_exercise_exercises" ("exercisesId") `);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "groupExercisesId"`);
        await queryRunner.query(`ALTER TABLE "group_exercises_exercise_exercises" ADD CONSTRAINT "FK_3e573cd97657497556483eb781b" FOREIGN KEY ("groupExercisesId") REFERENCES "group_exercises"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_exercises_exercise_exercises" ADD CONSTRAINT "FK_dfaef32508b40c1259b5b11e639" FOREIGN KEY ("exercisesId") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group_exercises_exercise_exercises" DROP CONSTRAINT "FK_dfaef32508b40c1259b5b11e639"`);
        await queryRunner.query(`ALTER TABLE "group_exercises_exercise_exercises" DROP CONSTRAINT "FK_3e573cd97657497556483eb781b"`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD "groupExercisesId" integer`);
        await queryRunner.query(`DROP INDEX "IDX_dfaef32508b40c1259b5b11e63"`);
        await queryRunner.query(`DROP INDEX "IDX_3e573cd97657497556483eb781"`);
        await queryRunner.query(`DROP TABLE "group_exercises_exercise_exercises"`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD CONSTRAINT "FK_ce6973215ba86f96c1541031f29" FOREIGN KEY ("groupExercisesId") REFERENCES "group_exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
