# Cursor Helper

A simple Node.js package that provides a cursor helper to paginate through MongoDB collections.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the package via npm:
```bash
npm install cursor-helper
```
## Usage

To use the Cursor Helper in your project, follow these steps:
1. Import the package in your JavaScript file:
```javascript
import CursorHelper from 'cursor-helper.js'
```
2. Create an instance of the CursorHelper and use it in your application:
```javascript
const cursorHelper = new CursorHelper(dbUrl, dbName);
```
3. Connect to the database and use the pagination method:
```javascript
async function run() {
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
```

## API Reference

Constructor
```javascript
new CursorHelper(dbUrl, dbName)
```

Parameters
- ```dbUrl (string)```: The URL of the MongoDB database.
- ```dbName (string)```: The name of the database to connect to.

Methods
- ```connect()``` Connects to the MongoDB database.
- ```paginate(collectionName, query, options, limit, page)``` Retrieves paginated results from the specified collection.

Parameters
- ```collectionName (string)```: The name of the collection to paginate.
- ```query (object)```: The name of the collection to paginate.
- ```options (object)```: Additional options for the query.
- ```limit (number)```: The number of documents to return per page.
- ```page (number)```: The page number to retrieve.

- ```close()``` Closes the connection to the MongoDB database.

## Examples

Here are some examples of how to use the Cursor Helper:

### Example 1: Basic Pagination
```javascript
import CursorHelper from 'cursor-helper';

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'test';
const cursorHelper = new CursorHelper(dbUrl, dbName);

async function run() {
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
```

### Example 2: Paginate with Filters

```javascript
const result = await cursorHelper.paginate('yourCollectionName', { status: 'active' }, {}, 5, 2);
console.log(result);
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.
1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.

## Licence

This project is licensed under the MIT License. You are free to use, modify, and distribute this software, provided that the original license and copyright notice are included in all copies or substantial portions of the software.

For more details, see the [LICENSE](LICENSE) file.


### Summary of Sections

- **Installation**: Instructions on how to install the package.
- **Usage**: Basic usage instructions with code snippets.
- **API Reference**: Detailed information about the `CursorHelper` class and its methods.
- **Examples**: Practical examples demonstrating how to use the package.
- **Contributing**: Guidelines for contributing to the project.
- **License**: Information about the project's license.

Feel free to modify any sections to better fit your project's specifics or to add any additional information you think is necessary!

