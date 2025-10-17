import type { MigrationInterface, QueryRunner } from "typeorm";

export class AddMobileColumnToUser1760424393111 implements MigrationInterface {
    name = 'AddMobileColumnToUser1760424393111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mobile" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mobile"`);
    }

}
