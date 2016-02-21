module.exports = function (grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      tests: ['tmp']
    },

   json: {
      default_options: {
        options: {
          namespace: "test_json"
        },
        src: 'test/fixtures/**/*.json',
        dest: 'tmp/default_options.js'
      },
      pretty_options: {
        options: {
          namespace: "pretty_json",
          pretty: true
        },
        src: 'test/fixtures/**/*.json',
        dest: 'tmp/pretty_options.js'
      },
      common_js_options: {
        options: {
          commonjs: true
        },
        src: 'test/fixtures/**/*.json',
        dest: 'tmp/common_js_options.js'
      },
      global_namespace_options: {
        options: {
          namespace: "my.global"
        },
        src: 'test/fixtures/**/*.json',
        dest: 'tmp/global_namespace_options.js'
      },
      process_content_options: {
        options: {
          processContent: function(content) {
            content.myVar = 'myVal';
            return content;
          }
        },
        src: 'test/fixtures/**/*.json',
        dest: 'tmp/process_content_options.js'
      }
    },

    nodeunit: {
      all: ['test/**/*_test.js']
    },
    jshint: {
      files: [
        'Gruntfile.js',
        'tasks/**/*.js',
        'test/**/*_test.js'
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
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load local tasks.
  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'json', 'nodeunit']);

  // Default task.
  grunt.registerTask('default', 'json');

};
