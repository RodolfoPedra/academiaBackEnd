import {MigrationInterface, QueryRunner} from "typeorm";

export class AjusteAtributosModelsCriaçãoModelEndereços1594602651728 implements MigrationInterface {
    name = 'AjusteAtributosModelsCriaçãoModelEndereços1594602651728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "cep" character varying NOT NULL, "city" character varying NOT NULL, "neighborhood" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "email" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "register_student" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "register_student" DROP COLUMN "street"`);
        await queryRunner.query(`ALTER TABLE "register_student" DROP COLUMN "neighborhood"`);
        await queryRunner.query(`ALTER TABLE "register_student" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "register_student" DROP COLUMN "charge"`);
        await queryRunner.query(`ALTER TABLE "register_student" ADD "ageResponsible" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "register_student" DROP COLUMN "ageResponsible"`);
        await queryRunner.query(`ALTER TABLE "register_student" ADD "charge" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register_student" ADD "cep" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register_student" ADD "neighborhood" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register_student" ADD "street" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "register_student" ADD "number" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "adresses"`);
    }

}
