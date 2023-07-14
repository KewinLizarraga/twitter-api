import { IsString } from "class-validator";

export class CreateTweetDto {
  @IsString()
  readonly message: string;
}
