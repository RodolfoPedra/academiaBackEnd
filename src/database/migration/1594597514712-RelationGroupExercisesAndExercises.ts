import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationGroupExercisesAndExercises1594597514712 implements MigrationInterface {
    name = 'RelationGroupExercisesAndExercises1594597514712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercises" ADD "groupExercisesId" integer`);
        await queryRunner.query(`ALTER TABLE "exercises" ADD CONSTRAINT "FK_ce6973215ba86f96c1541031f29" FOREIGN KEY ("groupExercisesId") REFERENCES "group_exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercises" DROP CONSTRAINT "FK_ce6973215ba86f96c1541031f29"`);
        await queryRunner.query(`ALTER TABLE "exercises" DROP COLUMN "groupExercisesId"`);
    }

}
