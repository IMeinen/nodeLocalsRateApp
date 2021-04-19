import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Local } from "./Local";

@Entity("rates")
class Rates {
  @PrimaryColumn()
  id?: string;
  @Column()
  comment: string;
  @Column()
  rate: string;

  @ManyToOne(() => Local)
  @JoinColumn({ name: "local_id" })
  local: Local;

  @Column()
  local_id: string;

  @CreateDateColumn({ default: () => "NOW()" })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Rates };
