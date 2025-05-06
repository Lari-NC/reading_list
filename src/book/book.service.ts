import { Inject, Injectable } from '@nestjs/common';
import Book from './book.entity';
import { Like, Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
  ) {}

  async createBook(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto);
    await this.bookRepository.save(book);
  }

  findAll(title?: string, author?: string, genre?: string): Promise<Book[]> {
    const where = {};

    if (title) {
      where['title'] = Like(`%${title}%`);
    }
    if (author) {
      where['authors'] = { name: Like(`%${author}%`) };
    }
    if (genre) {
      where['genre'] = Like(`%${genre}%`);
    }

    return this.bookRepository.find({
      where,
      relations: ['authors'],
    });
    // return this.books.filter((book) => {
    //   const matchesTitle = title
    //     ? book.title.toLowerCase().includes(title.toLowerCase())
    //     : true;

    //   const matchesAuthor = author
    //     ? book.authors.some((a) =>
    //         a.name.toLowerCase().includes(author.toLowerCase()),
    //       )
    //     : true;

    //   const matchesGenre = genre
    //     ? book.genre.toLowerCase() === genre.toLowerCase()
    //     : true;

    //   return matchesTitle && matchesAuthor && matchesGenre;
    // });
  }
}
