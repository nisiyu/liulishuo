/**
 * Created by siyu on 2016/4/14.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var minifycss = require('gulp-minify-css');

gulp.task('default', function(){
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
    gulp.src('mooncake.html')
        .pipe(gulp.dest('dist'));
    gulp.src('img/*.png')
        .pipe(gulp.dest('dist/img'));
    gulp.src('css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});