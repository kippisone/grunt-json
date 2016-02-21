[![NPM version](https://badge.fury.io/js/grunt-json.png)](http://badge.fury.io/js/grunt-json)
[![Dependency Status](https://david-dm.org/Andifeind/grunt-json/status.svg)](https://david-dm.org/Andifeind/grunt-json)
[![devDependency Status](https://david-dm.org/Andifeind/grunt-json/dev-status.svg)](https://david-dm.org/Andifeind/grunt-json#info=devDependencies)

# grunt-json

Compiles JSON files into Javascript

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-json`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-json');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

### Options

#### namespace
Type: `String`
Default: 'myjson'

The namespace in which the json data will be assigned.

#### includePath
Type: `Boolean`
Default: false

Includes the full path of the file and the extension. By default only the file name is used as the key value.

#### pretty
Type: `Boolean`
Default: false

Outputs json in a readable way

#### processName
Type: `function`
Default: null

This option accepts a function which takes one argument (filename) and returns a string which will be used as the key for the object.  The example below stores all json data on the default myjson namespace in capital letters.

```js
options: {
  processName: function(filename) {
    return filename.toUpperCase();
  }
}
```

#### processContent
Type: `function`
Default: null

This option accepts a function which takes one argument (content) and returns a modified content of the JSON file. The example below appends a custom attribute to the JSON file content.

```js
options: {
  processContent: function(content) {
    content.myVar = 'myVal';
    return content;
  }
}
```

####commonjs
Type: `Boolean`
Default: false

Exports the namespace which the json has been assigned too. ```module.exports =```

### Usage Examples

```js
json: {
    main: {
        options: {
            namespace: 'myjson',
            includePath: true,
            processName: function(filename) {
                return filename.toLowerCase();
            }
        },
        src: ['path/to/source/**/*.json'],
        dest: 'path/to/compiled/json.js'
    }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
 * 2016-02-21   v0.2.0   Added pretty option,
                         Added processContent option (Thanks to ducin for the pull request)
 * 2015-04-10   v0.1.5   Do not add a var keyword if namespace contains a dot.
 * 2015-04-10   v0.1.4   Now maintained by Andifeind.
 * 2013-07-02   v0.1.3   Added processName functionality. Added includePath condition. Updated documentation. Added a way to safely add to the namespace if it already exists and not overwrite.
 * 2013-05-01   v0.1.2   First commit.

## License
Copyright (c) 2015 Andifeind  
Copyright (c) 2012 Wilson Page  
Licensed under the MIT license.
