import { DataSource } from 'typeorm';
import Book from './book.entity';
export declare const bookProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Book>;
    inject: string[];
}[];
