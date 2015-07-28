(function() {
  'use strict';

  var gulp = require('gulp');
  var browserify = require('browserify');
  var rename = require("gulp-rename");
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');

  // Bundle JS together with browserify
  gulp.task('bundle-example', function(cb) {
    browserify('angular-example.js')
      .exclude('ringo/httpclient')
      .bundle()
      .pipe(source('angular-example.js'))
      .pipe(rename('angular-example-compiled.js'))
      .pipe(gulp.dest('.'))
      .on('end', cb);
  });


}());
