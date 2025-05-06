"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookProviders = void 0;
const book_entity_1 = __importDefault(require("./entities/book.entity"));
exports.bookProviders = [
    {
        provide: 'BOOK_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(book_entity_1.default),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=book.providers.js.map