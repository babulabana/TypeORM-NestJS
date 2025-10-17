import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AgeRemoveEmployeeTable1760593734367 implements MigrationInterface {
    name = 'AgeRemoveEmployeeTable1760593734367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Remove the "age" column from the employee table using TableColumn
        await queryRunner.dropColumn('employee', new TableColumn({ name: 'age', type: 'int' }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Add the "age" column back if migration is reverted
        await queryRunner.addColumn(
            'employee',
            new TableColumn({
                name: 'age',
                type: 'int',
            })
        );
    }
}
