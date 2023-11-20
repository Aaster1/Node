const fs = require('fs');

fs.mkdir('newDirectory', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory has been created.');
});