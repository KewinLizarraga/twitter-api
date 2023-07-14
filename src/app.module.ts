import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TweetsModule } from './modules/tweets/tweets.module';

@Module({
  imports: [
    TweetsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'miContrasena',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, // solo en Dev
    }),
  ],
})
export class AppModule {}
