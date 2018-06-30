const fs = require('fs');

function readFile(filePath) {

  return new Promise(function(resolve, reject) {
    try {
      fs.readFile(filePath, 'utf-8', (err, data) => {

        if (err) {
          console.error(err);
          reject(err);
        }

        resolve(data);

      }); 
    } catch (err) {
      console.error(err);
    }
  });

}

module.exports = readFile;
