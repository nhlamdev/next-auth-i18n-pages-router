declare module 'mongodb' {
    // Interfaces for types used in MongoDB

    interface ObjectId {
        toHexString(): string;
    }

    interface MongoClientOptions {
        useNewUrlParser?: boolean;
        useUnifiedTopology?: boolean;
        poolSize?: number;
    }

    interface CollectionCreateOptions {
        strict?: boolean;
        capped?: boolean;
        size?: number;
        max?: number;
    }

    interface CollectionInsertOneOptions {
        bypassDocumentValidation?: boolean;
        writeConcern?: any;
    }

    interface CollectionInsertManyOptions {
        ordered?: boolean;
        bypassDocumentValidation?: boolean;
        writeConcern?: any;
    }

    interface CollectionUpdateOptions {
        upsert?: boolean;
        multi?: boolean;
        writeConcern?: any;
    }

    interface CollectionDeleteOptions {
        single?: boolean;
        writeConcern?: any;
    }

    // Classes for connecting to MongoDB

    class MongoClient {
        constructor(uri: string, options?: MongoClientOptions);

        connect(): Promise<MongoClient>;

        close(force?: boolean): Promise<void>;

        db(name: string): Db;
    }

    class Db {
        constructor(client: MongoClient, name: string);

        collection(name: string): Collection;
    }

    class Collection {
        constructor(db: Db, name: string);

        find(query?: any): Cursor;

        findOne(query?: any): Promise<any>;

        insertOne(doc: any, options?: CollectionInsertOneOptions): Promise<any>;

        insertMany(docs: any[], options?: CollectionInsertManyOptions): Promise<any>;

        updateOne(filter: any, update: any, options?: CollectionUpdateOptions): Promise<any>;

        updateMany(filter: any, update: any, options?: CollectionUpdateOptions): Promise<any>;

        deleteOne(filter: any, options?: CollectionDeleteOptions): Promise<any>;

        deleteMany(filter: any, options?: CollectionDeleteOptions): Promise<any>;

        countDocuments(query?: any, options?: any): Promise<number>;
    }

    class Cursor {
        limit(limit: number): Cursor;

        sort(sort: any): Cursor;

        toArray(): Promise<any[]>;
    }

    // Functions for working with ObjectIDs

    function ObjectId(id?: string | number | ObjectId | Buffer): ObjectId;

    function isValidObjectId(id?: string | number | ObjectId | Buffer): boolean;
}
