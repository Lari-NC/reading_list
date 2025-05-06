import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<void>;
    findAll(title?: string, author?: string, genre?: string): Promise<Book[]>;
}
