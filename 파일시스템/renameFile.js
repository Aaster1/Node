const fs = require('fs');

fs.rename('newFile.txt', 'oldName.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File has been renamed.');
});