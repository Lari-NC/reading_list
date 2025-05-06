import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
export declare class AuthorController {
    private authorService;
    constructor(authorService: AuthorService);
    create(createAuthorDto: CreateAuthorDto): Promise<void>;
}
