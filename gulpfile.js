'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-minify-css');
const refresh = require('gulp-livereload');
const concat = require('gulp-concat');
const csslint = require('gulp-csslint');
const sass = require('gulp-sass');
const jscpd = require('gulp-jscpd');
const browserSync = require('browser-sync');

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: ''
    },
    notify: false
  });
});

gulp.task('sass', () => {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', () => {
  return gulp.src('js/*.js')
    .on('error', console.log)
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(jscpd())
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});

gulp.task('styles', () => {
  return gulp.src('css/*.css')
    .on('error', console.log)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(csslint())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(['img/*'], ['images']);
    gulp.watch(['sass/*'], ['sass']);
});

gulp.task('default', ['styles', 'sass', 'watch', 'browser-sync']);