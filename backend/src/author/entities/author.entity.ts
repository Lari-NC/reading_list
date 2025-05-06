import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import Book from '../../book/entities/book.entity';

@Entity()
@Unique(['name'])
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Book, (book) => book.authors)
  books: Book[];
}

export default Author;
