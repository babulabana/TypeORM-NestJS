import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddProjectIdEmployeeTable1760678021527 implements MigrationInterface {

     public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "employee",
            new TableColumn({
                name: "project_id",
                type: "int",
                isNullable: true,
            })
        );

        await queryRunner.createForeignKey(
            "employee",
            new TableForeignKey({
                name: "FK_employee_project", // 👈 give the foreign key a name
                columnNames: ["project_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "project",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key by its name
        await queryRunner.dropForeignKey("employee", "FK_employee_project");

        // Drop column
        await queryRunner.dropColumn("employee", "project_id");
    }
}
