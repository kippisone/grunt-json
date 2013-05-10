module.exports = function (grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodeunit: {
      all: ['test/**/*_test.js']
    },
    jshint: {
      files: [
        'Gruntfile.js',
        'tasks/**/*.js',
        'test/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      project: {
        files: [
          'Gruntfile.js',
          'tasks/**/*.js',
          'test/**/*.js'
        ],
        tasks: 'default'
      }
    },
    json: {
      dest: {
        src: ['test/**/*.json'],
        dest: 'test/json.js'
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', 'json');

};
