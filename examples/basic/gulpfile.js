(function() {
  'use strict';

  var gulp = require('gulp');
  var browserify = require('browserify');
  var rename = require("gulp-rename");
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');

  // Bundle JS together with browserify
  gulp.task('bundle-example', function(cb) {
    browserify('basic.js')
      .exclude('ringo/httpclient')
      .bundle()
      .pipe(source('basic.js'))
      .pipe(rename('basic-compiled.js'))
      .pipe(gulp.dest('.'))
      .on('end', cb);
  });


}());
