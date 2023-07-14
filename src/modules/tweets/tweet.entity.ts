import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  message: string;
}
