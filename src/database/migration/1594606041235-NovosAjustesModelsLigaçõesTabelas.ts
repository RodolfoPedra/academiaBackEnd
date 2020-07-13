import {MigrationInterface, QueryRunner} from "typeorm";

export class NovosAjustesModelsLigaçõesTabelas1594606041235 implements MigrationInterface {
    name = 'NovosAjustesModelsLigaçõesTabelas1594606041235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "studentId" integer`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_e37202037215fff2a901d31073b" FOREIGN KEY ("studentId") REFERENCES "register_student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_e37202037215fff2a901d31073b"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "studentId"`);
    }

}
