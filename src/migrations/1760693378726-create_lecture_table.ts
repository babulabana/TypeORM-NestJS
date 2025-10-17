import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLectureTable1760693378726 implements MigrationInterface {

      public async up(queryRunner: QueryRunner): Promise<void> {
    // 1. Create the lectures table
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
            length: '100',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'date',
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
      'lectures',
      new TableForeignKey({
        columnNames: ['employee_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'employees',
        onDelete: 'CASCADE', // Delete lecture if employee is deleted
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop foreign key first
    const table = await queryRunner.getTable('lectures');
    if (table) {
      const foreignKey = table.foreignKeys.find(fk => fk.columnNames.includes('employee_id'));
      if (foreignKey) {
        await queryRunner.dropForeignKey('lectures', foreignKey);
      }
    }

    // Drop table
    await queryRunner.dropTable('lectures');
  }
}
