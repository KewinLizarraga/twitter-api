import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/entities';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  message: string;

  @ManyToOne((type) => User, (user) => user.tweets, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
