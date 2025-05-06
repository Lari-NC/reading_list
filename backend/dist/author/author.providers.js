"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorProviders = void 0;
const author_entity_1 = __importDefault(require("./author.entity"));
exports.authorProviders = [
    {
        provide: 'AUTHOR_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(author_entity_1.default),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=author.providers.js.map