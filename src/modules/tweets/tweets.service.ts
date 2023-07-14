import { Injectable, NotFoundException } from '@nestjs/common';

import { Tweet } from './tweet.entity';
import { CreateTweetDto, UpdateTweetDto } from './dto';

@Injectable()
export class TweetsService {
  private tweets: Tweet[] = [
    {
      id: '1',
      message: 'Hello world from NestJS',
    },
  ];

  getTweets(): Tweet[] {
    return this.tweets;
  }

  getTweet(id: string): Tweet {
    const tweet = this.tweets.find((item) => item.id === id);
    if (!tweet) {
      throw new NotFoundException(`Tweet not found`);
    }
    return tweet;
  }

  createTweet({ message }: CreateTweetDto): void {
    this.tweets.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
  }

  updateTweet(id: string, message: UpdateTweetDto) {
    let tweet: Tweet = this.getTweet(id);
    tweet = { ...tweet, message: message.toString() };
    return tweet;
  }

  deleteTweet(id: string): void {
    const index = this.tweets.findIndex((tweet) => tweet.id === id);
    if (index >= 0) {
      this.tweets.splice(index, 1);
    }
  }
}
