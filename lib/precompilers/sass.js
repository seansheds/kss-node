var fs = require('fs'),
    sass = require('node-sass'),
    sassCompile = module.exports = {};

// Name of the stylesheet language
sassCompile.name = 'sass';

// File extension for that language
sassCompile.extensions = ['sass', 'scss'];

/**
 * Compiles the passed file to css and passes
 * the resulting css to the given callback
 *
 * @param  {String}   file     The file to compile
 * @param  {Function} callback (err, css)
 */
sassCompile.render = function (file, callback) {
	var css = sass.renderSync({
		file: file
	});

	try {
		callback(null, css);
	} catch(e) {
		return callback(e);
	}
};
