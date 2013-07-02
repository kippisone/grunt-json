/*
 * grunt-json
 * https://github.com/wilsonpage/grunt-json
 *
 * Copyright (c) 2012 Wilson Page
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {
    var path = require('path');

    var defaultProcessNameFunction = function (name) {
        return name;
    };

    var concatJson = function (files, data) {
        var options = data.options;
        var namespace = options && options.namespace || 'myjson';               // Allows the user to customize the namespace but will have a default if one is not given.
        var includePath = options && options.includePath || false;              // Allows the user to include the full path of the file and the extension.
        var processName = options.processName || defaultProcessNameFunction;    // Allows the user to modify the path/name that will be used as the identifier.
        var basename;
        var filename;

        return 'var ' + namespace + ' = ' + namespace + ' || {};' + files.map(function (filepath) {
            basename = path.basename(filepath, '.json');
            filename = (includePath) ? processName(filepath) : processName(basename);
            return '\n' + namespace + '["' + filename + '"] = ' + grunt.file.read(filepath) + ';';
        }).join('');
    };

    // Please see the grunt documentation for more information regarding task and
    // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

    // ==========================================================================
    // TASKS
    // ==========================================================================

    grunt.registerMultiTask('json', 'Concatenating JSON into JS', function () {
        var data = this.data;
        grunt.util.async.forEachSeries(this.files, function (f, nextFileObj) {
            var destFile = f.dest;
            var files = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });

            var json = concatJson(files, data);
            grunt.file.write(destFile, json);
            grunt.log.write('File "' + destFile + '" created.');
        });
    });
};
