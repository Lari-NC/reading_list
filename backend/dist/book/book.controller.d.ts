import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import Book from './entities/book.entity';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<void>;
    findAll(title?: string, author?: string, genre?: string): Promise<any[]>;
    findById(id: number): Promise<Book>;
    getGenres(): Promise<string[]>;
    updateFavorite(id: number, isFavorite: boolean): Promise<import("typeorm").UpdateResult>;
}
