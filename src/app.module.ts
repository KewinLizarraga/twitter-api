import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TweetsModule } from './modules/tweets/tweets.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
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
    TweetsModule,
    UsersModule,
  ],
})
export class AppModule {}
