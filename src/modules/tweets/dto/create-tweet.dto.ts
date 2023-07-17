import { IsString } from 'class-validator';

import { User } from '../../users/entities';

export class CreateTweetDto {
  @IsString()
  readonly message: string;

  readonly user: Partial<User>;
}
