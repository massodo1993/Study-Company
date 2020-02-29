'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/main.scss', ['sass']);
});

gulp.task('pug-build', function buildHTML() {
    return gulp.src('./src/templates/main.pug')
    .pipe(pug())
    .pipe(gulp.dest("./dist"))
  });