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
import { CreateTweetDto, UpdateTweetDto } from './dto';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Get()
  getTweets(@Query() filter): Tweet[] {
    const { orderBy, searchTerm } = filter;

    return this.tweetsService.getTweets();
  }

  @Get(':id')
  getTweet(@Param('id') id: string): Tweet {
    return this.tweetsService.getTweet(id);
  }

  @Post()
  createTweet(@Body() message: CreateTweetDto) {
    return this.tweetsService.createTweet(message);
  }

  @Patch(':id')
  updateTweet(
    @Param('id') id: string,
    @Body('message') message: UpdateTweetDto,
  ): Tweet {
    return this.tweetsService.updateTweet(id, message);
  }

  @Delete(':id')
  deleteTweet(@Param('id') id: string) {
    return this.tweetsService.deleteTweet(id);
  }
}
