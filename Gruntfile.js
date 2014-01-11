module.exports = function(grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: true
			},
			all: ['src/**/*.js']
		},
		mochaTest: {
			all: ['src/**/*.js', 'test/**/*.js']
		},
		watch: {
			test: {
				tasks: ['test'],
				files: ['src/**/*.js', 'test/**/*.js']
			}
		}
	});

	grunt.registerTask('test', ['jshint', 'mochaTest']);
};