import Book from 'src/book/entities/book.entity';
export interface Author {
    name: string;
    otherBooks: Book[];
}
