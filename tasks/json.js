/*
 * grunt-json
 * https://github.com/wilsonpage/grunt-json
 *
 * Copyright (c) 2012 Wilson Page
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  var path = require('path');

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('json', 'Your task description goes here.', function() {
    var files = grunt.file.expandFiles(this.file.src);

    var json = grunt.helper('concat-json', files, { namespace: 'myjson' });
    grunt.file.write(this.file.dest, json);
    //grunt.log.write(grunt.helper('json'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('concat-json', function(files, options) {
    var namespace = options && options.namespace || 'myjson';
    var basename;

    return 'var ' + namespace + '={};' + files.map(function(filepath) {
      basename = path.basename(filepath, '.json');
      return '\n' + options.namespace + '["' + basename + '"] = ' + grunt.task.directive(filepath, grunt.file.read).replace(/[ \t\r\n]+/g,"") + ';';
    }).join('');
  });
};
