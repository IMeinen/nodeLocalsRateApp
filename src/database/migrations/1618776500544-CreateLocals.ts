import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLocals1618776500544 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "locals",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "address",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "latitude",
            type: "varchar",
          },
          {
            name: "longitude",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("locals");
  }
}
