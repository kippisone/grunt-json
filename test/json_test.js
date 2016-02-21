var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['json'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  common_js_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/common_js_options.js');
    var expected = grunt.file.read('test/expected/common_js_option.js');
    test.equal(actual, expected, 'should concat json and export');

    test.done();
  },
  default_options: function (test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/default_options.js');
    var expected = grunt.file.read('test/expected/default_options.js');
    test.equal(actual, expected, 'should concat json and export');

    test.done();
  },
  global_namespace: function (test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/global_namespace_options.js');
    var expected = grunt.file.read('test/expected/global_namespace_options.js');
    test.equal(actual, expected, 'should concat json and export');

    test.done();
  },
  process_content_options: function (test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/process_content_options.js');
    var expected = grunt.file.read('test/expected/process_content_options.js');
    test.equal(actual, expected, 'should concat json and export');

    test.done();
  },
  pretty_options: function (test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/pretty_options.js');
    var expected = grunt.file.read('test/expected/pretty_options.js');
    test.equal(actual, expected, 'should concat json and export');

    test.done();
  }
};
