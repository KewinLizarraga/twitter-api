import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tweet } from './tweet.entity';
import { CreateTweetDto, PaginationQueryDto, UpdateTweetDto } from './dto';

@Injectable()
export class TweetsService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  async getTweets({ limit, offset }: PaginationQueryDto): Promise<Tweet[]> {
    return await this.tweetRepository.find({
      relations: ['user'],
      skip: offset,
      take: limit,
    });
  }

  async getTweet(id: number): Promise<Tweet> {
    // const tweet: Tweet = await this.tweetRepository.findOneBy({ id });
    const tweet: Tweet = await this.tweetRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!tweet) {
      throw new NotFoundException(`Tweet not found`);
    }
    return tweet;
  }

  createTweet(body: CreateTweetDto): void {
    const tweet: Tweet = this.tweetRepository.create(body);
    this.tweetRepository.save(tweet);
  }

  async updateTweet(id: number, { message }: UpdateTweetDto): Promise<Tweet> {
    const tweet: Tweet = await this.tweetRepository.preload({ id, message });
    if (!tweet) {
      throw new NotFoundException('Tweet not found');
    }
    return tweet;
  }

  async deleteTweet(id: number): Promise<void> {
    const tweet = await this.getTweet(id);
    await this.tweetRepository.remove(tweet);
  }
}
