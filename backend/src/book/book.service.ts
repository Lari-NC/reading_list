import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import Book from './entities/book.entity';
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

  async findAll(
    title?: string,
    author?: string,
    genre?: string,
  ): Promise<any[]> {
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

    return await this.bookRepository.find({
      where,
      relations: ['authors', 'authors.books'],
    });
  }

  async findById(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id }, relations: ['authors'] });
    if (!book) {
      throw new NotFoundException(`Libro con id ${id} no encontrado`);
    }
    return book;
  }

  async updateFavorite(id: number, isFavorite: boolean) {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) throw new NotFoundException();
    return await this.bookRepository.update(id, { isFavorite });
  }
}
