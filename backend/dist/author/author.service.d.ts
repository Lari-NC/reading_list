import Author from './entities/author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
export declare class AuthorService {
    private authorRepository;
    constructor(authorRepository: Repository<Author>);
    createAuthor(createAuthorDto: CreateAuthorDto): Promise<void>;
    findAll(): Promise<Author[]>;
}
