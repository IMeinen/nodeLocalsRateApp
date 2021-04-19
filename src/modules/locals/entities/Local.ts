import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("locals")
class Local {
  @PrimaryColumn()
  id?: string;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  latitude: string;
  @Column()
  longitude: string;
  @CreateDateColumn({ default: () => "NOW()" })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Local };
