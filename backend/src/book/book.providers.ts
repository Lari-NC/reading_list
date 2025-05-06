import { DataSource } from 'typeorm';
import Book from './entities/book.entity';
// import Author from '../author/entities/author.entity';

export const bookProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Book),
    inject: ['DATA_SOURCE'],
  },
  // {
  //   provide: 'AUTHOR_REPOSITORY',
  //   useFactory: (dataSource: DataSource) => dataSource.getRepository(Author),
  //   inject: ['DATA_SOURCE'],
  // },
];
