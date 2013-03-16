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
  var concatJson = function (files, options) {
    var namespace = options && options.namespace || 'myjson';
    var basename;

    return 'var ' + namespace + '={};' + files.map(function (filepath) {
      basename = path.basename(filepath, '.json');
      return '\n' + namespace + '["' + basename + '"] = ' + grunt.file.read(filepath) + ';';
    }).join('');
  };

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('json', 'Concatenating JSON into JS', function () {
    var data = this.data;
    grunt.util.async.forEachSeries(this.files, function(f, nextFileObj) {
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
