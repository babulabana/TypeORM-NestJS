import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddEmployeeId_projectTable1760606196304 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('project', new TableColumn({
            name: 'employee_id',
            type: 'int',
            isNullable: true,
        }));

        await queryRunner.createForeignKey('project', new TableForeignKey({
            columnNames: ['employee_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'employee',
            onDelete: 'SET NULL',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('project');
        const foreignKey = table!.foreignKeys.find(fk => fk.columnNames.indexOf('employee_id') !== -1);
        if (foreignKey) await queryRunner.dropForeignKey('project', foreignKey);
        await queryRunner.dropColumn('project', 'employee_id');
    }
}
