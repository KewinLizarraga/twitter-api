import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';
import { Tweet } from './tweet.entity';

@Module({
  controllers: [TweetsController],
  providers: [TweetsService],
  imports: [TypeOrmModule.forFeature([Tweet])]
})
export class TweetsModule {}
