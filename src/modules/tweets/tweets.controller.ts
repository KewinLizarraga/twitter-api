import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { TweetsService } from './tweets.service';
import { Tweet } from './tweet.entity';
import { CreateTweetDto, PaginationQueryDto, UpdateTweetDto } from './dto';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Get()
  async getTweets(@Query() pagination: PaginationQueryDto): Promise<Tweet[]> {
    return await this.tweetsService.getTweets(pagination);
  }

  @Get(':id')
  async getTweet(@Param('id') id: number): Promise<Tweet> {
    return await this.tweetsService.getTweet(id);
  }

  @Post()
  createTweet(@Body() message: CreateTweetDto) {
    return this.tweetsService.createTweet(message);
  }

  @Patch(':id')
  async updateTweet(
    @Param('id') id: number,
    @Body() message: UpdateTweetDto,
  ): Promise<Tweet> {
    return await this.tweetsService.updateTweet(id, message);
  }

  @Delete(':id')
  deleteTweet(@Param('id') id: number) {
    return this.tweetsService.deleteTweet(id);
  }
}
