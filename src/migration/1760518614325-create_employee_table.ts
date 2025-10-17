import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployeeTable1760518614325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'employee',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'age',
                        type: 'int',
                    },
                    {
                        name: 'department',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'salary',
                        type: 'int',
                    },
                ],
            }),
            true // ifNotExist
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('employee', true); // drop if exists
    }

}
