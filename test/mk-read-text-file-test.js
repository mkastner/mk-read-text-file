/* jslint node: true, strict:implied, esversion: 6 */

const   tape = require('tape'),
        fs = require('fs'),
        path = require('path'),
        readFile = require('../index');

tape('mk read text file', function(t) {

    t.plan(2);

    async function run() {
        let filePath = path.join(path.resolve('./'), 'test/playground/testfile.txt');
        let result = await readFile(filePath);
        t.equal('success', result.status);
        t.equal('Testfile text', result.text.trim());
        t.end();
    }

    run();



});
