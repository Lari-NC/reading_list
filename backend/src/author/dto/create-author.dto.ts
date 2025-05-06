import Book from 'src/book/entities/book.entity';
import { IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  name: string;

  books: Book[];
}
