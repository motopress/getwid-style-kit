/* global require */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    lec = require('gulp-line-ending-corrector');

gulp.task('serve', ['scss'], function () {
    /**
     * watch for changes in scss files
     */
    gulp.watch("./scss/**/*.scss", ['scss']);
});

/**
 * scss task, will compile the .scss files,
 * and handle the error through plumber and notify through system message.
 */
gulp.task('scss', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.messageOriginal %>")
        }))
        .pipe(sass({outputStyle: 'expanded'})) // compressed
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        .pipe(lec({verbose: true, eolc: 'CRLF', encoding: 'utf8'}))
        .pipe(gulp.dest('./css/'))
});

gulp.task('default', ['serve']);
