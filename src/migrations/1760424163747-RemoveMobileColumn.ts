import type { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveMobileColumn1760424163747 implements MigrationInterface {
    name = 'RemoveMobileColumn1760424163747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mobile"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mobile" character varying`);
    }

}
