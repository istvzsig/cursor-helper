// example.js

const CursorHelper = require('./cursorHelper');

const dbUrl = 'mongodb://localhost:27017'; // Replace with your MongoDB URL
const dbName = 'testdb'; // Replace with your database name

async function run() {
    const cursorHelper = new CursorHelper(dbUrl, dbName);
    await cursorHelper.connect();

    try {
        const result = await cursorHelper.paginate('yourCollectionName', {}, {}, 10, 1);
        console.log(result);
    } catch (error) {
        console.error('Error during pagination:', error);
    } finally {
        await cursorHelper.close();
    }
}

run();
