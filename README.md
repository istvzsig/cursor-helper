# Cursor Helper

A simple Node.js package that provides a cursor helper to paginate through MongoDB collections.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

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