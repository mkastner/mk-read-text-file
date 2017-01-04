/* jslint node: true, strict:implied, esversion: 6 */

const   tape = require('tape'),
        fs = require('fs'),
        path = require('path'),
        writeFile = require('mk-write-text-file'),
        deleteFile = require('mk-delete-file'),
        testText = "test text";

tape('mk write text file', function(t) {

    async function run() {

        await writeFile('mk-write-text-file');

        t.plan(1);

        t.end();

    }

    run();



});
