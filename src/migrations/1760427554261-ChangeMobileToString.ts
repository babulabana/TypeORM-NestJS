// import { MigrationInterface, QueryRunner } from "typeorm";
import type { MigrationInterface, QueryRunner, TableColumn } from "typeorm";


export class ChangeMobileToString1760427554261 implements MigrationInterface {
    name = 'ChangeMobileToString1760427554261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mobile"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mobile" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mobile"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mobile" integer`);
    }

}
