import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:LcJaNJqgcSVcbF7@cluster0.36y3u.mongodb.net/backendtotalzero',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
