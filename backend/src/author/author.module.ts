import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { authorProviders } from './author.providers';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';

@Module({
  imports: [DatabaseModule],
  providers: [...authorProviders, AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}
