// src/migration/1760445472939-CreateBankAccountTable.ts
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateBankAccountTable1760445472939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // 1️⃣ Create bank_account table
        await queryRunner.createTable(
            new Table({
                name: 'bank_account',
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
                        length: '20',
                        isUnique: true,
                    },
                    {
                        name: 'bank_name',
                        type: 'varchar',
                        length: '50',
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

        // 2️⃣ Add foreign key to employee table
        await queryRunner.createForeignKey(
            'bank_account',
            new TableForeignKey({
                columnNames: ['employee_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'employee',
                onDelete: 'CASCADE', // delete bank account if employee is deleted
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get table safely
        const table = await queryRunner.getTable('bank_account');
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.includes('employee_id'));
            if (foreignKey) {
                await queryRunner.dropForeignKey('bank_account', foreignKey);
            }
            await queryRunner.dropTable('bank_account');
        }
    }
}
