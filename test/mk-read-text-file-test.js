/* jslint node: true, strict:implied, esversion: 6 */

const   tape = require('tape'),
        fs = require('fs'),
        path = require('path'),
        readFile = require('../index');

tape('mk read text file', function(t) {

    t.plan(1);

    async function run() {
        let filePath = path.join(path.resolve('./'), 'test/playground/testfile.txt');
        let fileText = await readFile(filePath);
        t.equal(fileText.trim(), 'Testfile text');
        t.end();
    }

    run();



});
