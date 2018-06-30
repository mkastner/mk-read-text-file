const tape = require('tape');
const path = require('path');
const readFile = require('../index');

async function main() {

  tape('mk read text file', async function(t) {

    try {

      t.plan(2);

      let filePath = path.join(path.resolve('./'), 'test/playground/testfile.txt');
      let data = await readFile(filePath);
      t.ok(data, 'data should be read');
      t.equal('Testfile text', data.trim());
      t.end();

    } catch (err) {
      
      console.error(err);
    }
  });

}

main();
