import Book from './entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    createBook(createBookDto: CreateBookDto): Promise<void>;
    findAll(title?: string, author?: string, genre?: string): Promise<any[]>;
    findById(id: number): Promise<Book>;
    updateFavorite(id: number, isFavorite: boolean): Promise<Book>;
}
