import { IsString, MinLength } from 'class-validator';

export class UpdateTweetDto {
  @IsString()
  readonly message: string;
}
