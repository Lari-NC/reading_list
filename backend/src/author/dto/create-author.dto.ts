import Book from 'src/book/book.entity';

export class CreateAuthorDto {
  
  name: string;

  books: Book[];
}