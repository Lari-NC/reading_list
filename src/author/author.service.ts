import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import Author from './author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_REPOSITORY')
    private authorRepository: Repository<Author>,
  ) {}

  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }
}

export default AuthorService;
