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

 * 2013-07-02   v0.1.3   Added processName functionality. Added includePath condition. Updated documentation. Added a way to safely add to the namespace if it already exists and not overwrite.
 * 2013-05-01   v0.1.2   First commit.

## License
Copyright (c) 2012 Wilson Page  
Licensed under the MIT license.