// cursorHelper.js

const { MongoClient } = require('mongodb');

class CursorHelper {
    constructor(dbUrl, dbName) {
        this.client = new MongoClient(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        this.dbName = dbName;
    }

    async connect() {
        await this.client.connect();
        this.db = this.client.db(this.dbName);
    }

    async getCursor(collectionName, query = {}, options = {}) {
        const collection = this.db.collection(collectionName);
        return collection.find(query, options);
    }

    async paginate(collectionName, query = {}, options = {}, pageSize = 10, page = 1) {
        const cursor = await this.getCursor(collectionName, query, options);
        const totalCount = await cursor.count();
        const totalPages = Math.ceil(totalCount / pageSize);
        const results = await cursor.skip((page - 1) * pageSize).limit(pageSize).toArray();

        return {
            page,
            pageSize,
            totalCount,
            totalPages,
            results,
        };
    }

    async close() {
        await this.client.close();
    }
}

module.exports = CursorHelper;
