import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateEmployeesProjectsTable1760695122283 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
    // 1. Create the join table
    await queryRunner.createTable(
      new Table({
        name: 'employees_projects',
        columns: [
          {
            name: 'employee_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'project_id',
            type: 'int',
            isPrimary: true,
          },
        ],
      }),
      true,
    );

    // 2. Add foreign key to employees
    await queryRunner.createForeignKey(
      'employees_projects',
      new TableForeignKey({
        columnNames: ['employee_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'employees',
        onDelete: 'CASCADE',
      }),
    );

    // 3. Add foreign key to projects
    await queryRunner.createForeignKey(
      'employees_projects',
      new TableForeignKey({
        columnNames: ['project_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'projects',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop foreign keys first
    const table = await queryRunner.getTable('employees_projects');
    if (table) {
      const fkEmployee = table.foreignKeys.find(fk => fk.columnNames.includes('employee_id'));
      const fkProject = table.foreignKeys.find(fk => fk.columnNames.includes('project_id'));
      if (fkEmployee) await queryRunner.dropForeignKey('employees_projects', fkEmployee);
      if (fkProject) await queryRunner.dropForeignKey('employees_projects', fkProject);
    }

    // Drop table
    await queryRunner.dropTable('employees_projects');
  }

}
