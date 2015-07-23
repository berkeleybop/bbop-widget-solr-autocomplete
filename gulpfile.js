(function() {
  'use strict';

  var gulp = require('gulp');
  var browserify = require('browserify');
  var rename = require("gulp-rename");
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');

  gulp.task('publish-npm', function() {
    var npm = require("npm");
    npm.load(function(er, npm) {
      // NPM
      npm.commands.publish();
    });
  });
}());
