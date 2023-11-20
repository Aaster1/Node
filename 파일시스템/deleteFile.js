const fs = require('fs');

fs.unlink('newDirectory', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File has been deleted.');
});