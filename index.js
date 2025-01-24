// index.js

import { MongoClient } from 'mongodb';

class CursorHelper {
    constructor(dbUrl, dbName) {
        this.dbUrl = dbUrl;
        this.dbName = dbName;
        this.client = new MongoClient(this.dbUrl);
        this.db = null;
    }

    async connect() {
        try {
            await this.client.connect();
            this.db = this.client.db(this.dbName);
            console.log('Connected to database:', this.dbName);
        } catch (error) {
            console.error('Error connecting to the database:', error);
            throw error;
        }
    }

    async paginate(collectionName, query, options, limit, page) {
        const skip = (page - 1) * limit;
        const cursor = this.db.collection(collectionName).find(query, options).skip(skip).limit(limit);
        const results = await cursor.toArray();
        const totalCount = await this.db.collection(collectionName).countDocuments(query);

        return {
            results,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
        };
    }

    async close() {
        await this.client.close();
        console.log('Connection closed');
    }
}

export default CursorHelper;
