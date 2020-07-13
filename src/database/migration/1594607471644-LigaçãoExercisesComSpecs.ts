import {MigrationInterface, QueryRunner} from "typeorm";

export class LigaçãoExercisesComSpecs1594607471644 implements MigrationInterface {
    name = 'LigaçãoExercisesComSpecs1594607471644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specs_exercises" ADD "exerciseId" integer`);
        await queryRunner.query(`ALTER TABLE "specs_exercises" ADD CONSTRAINT "FK_c19a37956c2dd1b1ae37a26d264" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specs_exercises" DROP CONSTRAINT "FK_c19a37956c2dd1b1ae37a26d264"`);
        await queryRunner.query(`ALTER TABLE "specs_exercises" DROP COLUMN "exerciseId"`);
    }

}
