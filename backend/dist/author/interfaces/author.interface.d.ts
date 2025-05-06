import Book from 'src/book/book.entity';
export interface Author {
    name: string;
    otherBooks: Book[];
}
