import {MigrationInterface, QueryRunner} from "typeorm";

export class AbstraçãoSpecsExerciciosEMaisLigações1594697872050 implements MigrationInterface {
    name = 'AbstraçãoSpecsExerciciosEMaisLigações1594697872050'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specs_exercises_student" ("id" SERIAL NOT NULL, "name_specs" character varying NOT NULL, "description_spec" character varying NOT NULL, "serie" integer NOT NULL, "repetition" integer NOT NULL, "charge" integer NOT NULL, "observation" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "exerciseId" integer, CONSTRAINT "PK_426aaf465e81f28de222193bdc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "specs_exercises_student" ADD CONSTRAINT "FK_c64012712105c600ad85f6a5b9e" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specs_exercises_student" DROP CONSTRAINT "FK_c64012712105c600ad85f6a5b9e"`);
        await queryRunner.query(`DROP TABLE "specs_exercises_student"`);
    }

}
