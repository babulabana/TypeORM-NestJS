import type { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeMobileToNumber1760427399997 implements MigrationInterface {
    name = 'ChangeMobileToNumber1760427399997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mobile"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mobile" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mobile"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mobile" character varying`);
    }

}
