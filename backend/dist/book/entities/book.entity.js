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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const typeorm_1 = require("typeorm");
const author_entity_1 = __importDefault(require("../../author/entities/author.entity"));
const genre_enum_1 = require("../../common/enums/genre.enum");
let Book = class Book {
    id;
    title;
    pages;
    genre;
    cover;
    synopsis;
    year;
    isbn;
    authors;
    isFavorite;
};
exports.Book = Book;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "pages", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "cover", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "synopsis", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Book.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "isbn", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => author_entity_1.default, (author) => author.books, {
        eager: false,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Book.prototype, "authors", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Book.prototype, "isFavorite", void 0);
exports.Book = Book = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['isbn'])
], Book);
exports.default = Book;
//# sourceMappingURL=book.entity.js.map