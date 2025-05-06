import { DataSource } from 'typeorm';
import Author from './author.entity';
export declare const authorProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Author>;
    inject: string[];
}[];
