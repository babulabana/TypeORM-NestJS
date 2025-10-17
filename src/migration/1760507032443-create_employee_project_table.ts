import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateEmployeeProjectTable1760507032443 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create employee_projects table
        await queryRunner.createTable(
            new Table({
                name: 'employee_projects',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'employee_Id',
                        type: 'int',
                    },
                    {
                        name: 'project_Id',
                        type: 'int',
                    },
                ],
            }),
            true
        );

        // Add foreign key to employees table
        await queryRunner.createForeignKey(
            'employee_projects',
            new TableForeignKey({
                columnNames: ['employee_Id'],
                referencedTableName: 'employee',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        );

        // Add foreign key to projects table
        await queryRunner.createForeignKey(
            'employee_projects',
            new TableForeignKey({
                columnNames: ['project_Id'],
                referencedTableName: 'projects',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
            }),
        );
    }
public async down(queryRunner: QueryRunner): Promise<void> {
    // Get the table
    const table = await queryRunner.getTable('employee_projects');
    if (!table) return; // table doesn't exist, nothing to do

    // Drop employeeId foreign key if it exists
    const employeeFk = table.foreignKeys.find(fk => fk.columnNames.includes('employee_Id') || fk.columnNames.includes('employee_id'));
    if (employeeFk) {
        await queryRunner.dropForeignKey('employee_projects', employeeFk);
    }

    // Drop projectId foreign key if it exists
    const projectFk = table.foreignKeys.find(fk => fk.columnNames.includes('project_Id') || fk.columnNames.includes('project_id'));
    if (projectFk) {
        await queryRunner.dropForeignKey('employee_projects', projectFk);
    }

    // Drop the table
    await queryRunner.dropTable('employee_projects', true); // true = ifExists
}


}
