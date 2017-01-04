/* jslint node:true, strict:implied, esversion: 6 */

var fs = require('fs'),
	log = require('mk-log');

function readFile(filePath) {

	return new Promise(function(resolve, reject) {

	    fs.readFile(filePath, 'utf-8', function(err, data) {

	        if (err) {
				log.error(err);
				log.error(err.stack);
	            reject(err);
	        }

	        resolve(data);

	    });

	});

}

module.exports = readFile;
