'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-minify-css');
const concat = require('gulp-concat');
const csslint = require('gulp-csslint');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const jscpd = require('gulp-jscpd');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('sass', () => {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('scripts', () => {
  return gulp.src('js/*.js')
    .on('error', console.log)
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(jscpd())
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});

gulp.task('css', () => {
  return gulp.src(['node_modules/bootstrap-grid/dist/grid.css','css/*.css'])
    .on('error', console.log)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(csslint())
    .pipe(concat('build.css'))
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});

gulp.task('html', () => {
  return gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch('sass/*', ['sass']);
    gulp.watch('css/*', ['css']);
    gulp.watch('index.html', ['html']);
});

gulp.task('default', ['connect', 'html', 'css', 'sass', 'watch']);