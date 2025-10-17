import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddBankAccountToEmployee1760599756584 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add bank_account_id column to employee table
        await queryRunner.addColumn('employee', new TableColumn({
            name: 'bank_account_id',
            type: 'int',
            isNullable: true,
        }));

        // Create foreign key relationship
        await queryRunner.createForeignKey('employee', new TableForeignKey({
            columnNames: ['bank_account_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'bank_account',
            onDelete: 'SET NULL', // if bank_account is deleted, set employee.bank_account_id to NULL
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const employeeTable = await queryRunner.getTable('employee');
        const bankFk = employeeTable!.foreignKeys.find(fk => fk.columnNames.indexOf('bank_account_id') !== -1);
        if (bankFk) {
            await queryRunner.dropForeignKey('employee', bankFk);
        }
        await queryRunner.dropColumn('employee', 'bank_account_id');
    }
}
