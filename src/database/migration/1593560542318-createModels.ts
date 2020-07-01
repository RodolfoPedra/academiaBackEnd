import {MigrationInterface, QueryRunner} from "typeorm";

export class createModels1593560542318 implements MigrationInterface {
    name = 'createModels1593560542318'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exercises" ("id" SERIAL NOT NULL, "name_exercise" character varying NOT NULL, "description_exercise" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c4c46f5fa89a58ba7c2d894e3c3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group_exercises" ("id" SERIAL NOT NULL, "name_group" character varying NOT NULL, "description_group" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e9bd8644331274933eae20da1c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "register_student" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "responsible" character varying NOT NULL, "age" integer NOT NULL, "databirth" TIMESTAMP NOT NULL, "cep" character varying NOT NULL, "neighborhood" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "email" character varying NOT NULL, "cellphone" character varying NOT NULL, "nameEmergency" character varying NOT NULL, "cellphoneEmergency" character varying NOT NULL, "charge" integer NOT NULL, "observation" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_98c67060dea7c9bff485a27ce5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specs_exercises" ("id" SERIAL NOT NULL, "name_specs" character varying NOT NULL, "description_spec" character varying NOT NULL, "serie" integer NOT NULL, "repetition" integer NOT NULL, "charge" integer NOT NULL, "observation" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d7941fc11eb3abb1c7fc820a781" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "specs_exercises"`);
        await queryRunner.query(`DROP TABLE "register_student"`);
        await queryRunner.query(`DROP TABLE "group_exercises"`);
        await queryRunner.query(`DROP TABLE "exercises"`);
    }

}
