'use strict';

require('should');

describe('strict', function () {
	var strict = require('../src/strict');

	it('should validate function arguments types', function (done) {
		var fn = strict('Number, String, Undefined, Object, Array', function() { done(); });

		(function() {
			fn('Wrong arguments should throw error', 1, {});
		}).should.throw();

		fn(1, '', undefined, {}, []);
	});

	it('should validate multiple function arguments types and execute the right one', function (done) {
		var fn = strict({
			'Object': function(obj) {
				obj.should.eql({ test: true });

				this(function() {});
			},
			'String, Array': function(name, value) {
				name.should.eql('test1');
				value.should.eql(['test2']);

				this(done);
			},
		}, function(callback) {
			callback();
		});

		fn({ test: true });
		fn('test1', ['test2']);
	});

	it.skip('should do instance of when the type is not a Number, String, Array, Object or Undefined type');
});