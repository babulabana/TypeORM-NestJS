import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddressAddEmployeeTable1760594459443 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add "address" column to employee table
        await queryRunner.addColumn(
            'employee',
            new TableColumn({
                name: 'address',
                type: 'varchar',
                length: '255',
                isNullable: true, // optional: set true if address can be empty
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove "address" column if migration is reverted
        await queryRunner.dropColumn('employee', 'address');
    }
}
