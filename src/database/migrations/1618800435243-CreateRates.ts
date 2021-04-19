import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRates1618800435243 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "rates",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "comment",
            type: "varchar",
          },
          {
            name: "rate",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "local_id",
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
    await queryRunner.dropTable("rates");
  }
}
