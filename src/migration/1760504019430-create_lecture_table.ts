import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLectureTable1760504019430 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create the lectures table
    await queryRunner.createTable(
      new Table({
        name: 'lectures',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'topic',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'employee_Id',
            type: 'int',
          },
        ],
      }),
      true,
    );

    // Add foreign key to employees table
    await queryRunner.createForeignKey(
      'lectures',
      new TableForeignKey({
        columnNames: ['employee_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'employee',
        onDelete: 'CASCADE',
      }),
    );
  }

 public async down(queryRunner: QueryRunner): Promise<void> {
  // Get the lectures table
  const table = await queryRunner.getTable('lectures');
  if (table) {
    // Find the foreign key by column name
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('employee_Id') !== -1, // use employeeId
    );

    if (foreignKey) {
      await queryRunner.dropForeignKey('lectures', foreignKey);
    }

    // Drop the table
    await queryRunner.dropTable('lectures');
  }
}

}
