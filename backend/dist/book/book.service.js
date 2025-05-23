"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BookService = class BookService {
    bookRepository;
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async createBook(createBookDto) {
        const book = this.bookRepository.create(createBookDto);
        await this.bookRepository.save(book);
    }
    async findAll(title, author, genre) {
        const where = {};
        if (title) {
            where['title'] = (0, typeorm_1.Like)(`%${title}%`);
        }
        if (author) {
            where['authors'] = { name: (0, typeorm_1.Like)(`%${author}%`) };
        }
        if (genre) {
            where['genre'] = (0, typeorm_1.Like)(`%${genre}%`);
        }
        return await this.bookRepository.find({
            where,
            relations: ['authors', 'authors.books'],
        });
    }
    async findById(id) {
        const book = await this.bookRepository.findOne({ where: { id } });
        if (!book) {
            throw new common_1.NotFoundException(`Libro con id ${id} no encontrado`);
        }
        return book;
    }
    async updateFavorite(id, isFavorite) {
        const book = await this.bookRepository.findOneBy({ id });
        if (!book)
            throw new common_1.NotFoundException();
        return await this.bookRepository.update(id, { isFavorite });
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BOOK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookService);
//# sourceMappingURL=book.service.js.map