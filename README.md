strict.js
=========

## Javascript examples
``` js
function Framework() {}

Framework.prototype.animate = strict({
	'Object, Function': function(values, callback) {
		return [values, 400, callback];
	},
	'Object, Number, Function': function(values, duration, callback) {
		return arguments;
	},
	'Object': function(values) {
		return [values, 400, function() {}];
	}
}, function(values, duration, callback) {
	// Put your animation logic here 
})
```

## Coffeescript examples
``` coffeescript
class Framework
	animate: strict
	  "Object, Function": (values, callback) ->
	    [values, 400, callback]

	  "Object, Number, Function": (values, duration, callback) ->
	    arguments

	  Object: (values) ->
	    [values, 400, ->]

	, (values, duration, callback) ->
		# Put your animation logic here
```

## License

(The MIT License)

Copyright (c) 2009-2014 Olle "EloB" Bröms &lt;olle.broms@ewebbyran.se&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.