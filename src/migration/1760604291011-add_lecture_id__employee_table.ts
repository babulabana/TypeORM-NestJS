import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddLectureId_employeeTable1760604291011 implements MigrationInterface {

 public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('employee', new TableColumn({
            name: 'lecture_id',
            type: 'int',
            isNullable: true,
        }));

        await queryRunner.createForeignKey('employee', new TableForeignKey({
            columnNames: ['lecture_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'lectures',
            onDelete: 'SET NULL',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('employee');
        const foreignKey = table!.foreignKeys.find(fk => fk.columnNames.indexOf('lecture_id') !== -1);
        if (foreignKey) await queryRunner.dropForeignKey('employee', foreignKey);
        await queryRunner.dropColumn('employee', 'lecture_id');
    }

}
