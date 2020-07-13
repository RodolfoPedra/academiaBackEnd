import {MigrationInterface, QueryRunner} from "typeorm";

export class TesteUniqueAtributosModel1594668747109 implements MigrationInterface {
    name = 'TesteUniqueAtributosModel1594668747109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercises" ADD CONSTRAINT "UQ_7cd6a0883f87b7c8f9b6d178753" UNIQUE ("name_exercise")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exercises" DROP CONSTRAINT "UQ_7cd6a0883f87b7c8f9b6d178753"`);
    }

}
