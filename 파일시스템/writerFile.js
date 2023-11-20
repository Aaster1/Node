const fs = require('fs');

const contentToWrite = 'Hello, Node.js!';

fs.writeFile('newFile.txt', contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File has been written.');
});