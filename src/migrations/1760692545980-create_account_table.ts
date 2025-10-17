import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateAccountTable1760692545980 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
    // 1. Create accounts table
    await queryRunner.createTable(
      new Table({
        name: 'accounts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'account_number',
            type: 'varchar',
            length: '50',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'bank_name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'employee_id',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    // 2. Add foreign key to Employee table
    await queryRunner.createForeignKey(
      'accounts',
      new TableForeignKey({
        columnNames: ['employee_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'employees',
        onDelete: 'CASCADE', // Optional: deletes account if employee is deleted
      }),
    );
  }
public async down(queryRunner: QueryRunner): Promise<void> {
  // Get the table safely
  const table = await queryRunner.getTable('accounts');
  if (table) {
    // Find the foreign key for employee_id
    const foreignKey = table.foreignKeys.find(fk => fk.columnNames.includes('employee_id'));
    if (foreignKey) {
      await queryRunner.dropForeignKey('accounts', foreignKey);
    }
  }

  // Drop the table
  await queryRunner.dropTable('accounts');
}

}
