(function() {
  'use strict';

  var gulp = require('gulp');
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var rename = require("gulp-rename");
  var mocha = require('gulp-mocha');
  var uglify = require('gulp-uglify');
  var concat = require('gulp-concat');
  var bump = require('gulp-bump');
  var del = require('del');
  var shell = require('gulp-shell');
  var marked = require('marked');
  var jshint = require('gulp-jshint');
  var jshints = require('jshint-stylish');

  gulp.task('publish-npm', function() {
    var npm = require("npm");
    npm.load(function(er, npm) {
      // NPM
      npm.commands.publish();
    });
  });


}());
