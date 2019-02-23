var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

gulp.task('css:compile', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass.sync({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

gulp.task('css:minify', gulp.series('css:compile', function () {
    return gulp.src([
            './css/*.css',
            '!./css/*.min.css'
        ])
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}));

gulp.task('css', gulp.series('css:compile', 'css:minify'));

gulp.task('js:minify', gulp.series(function () {
    return gulp.src([
            './js/*.js',
            '!./js/*.min.js'
        ])
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.stream());
}));

gulp.task('js', gulp.series('js:minify'));


gulp.task('browserSync', gulp.series(function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}));

gulp.task('pug', gulp.series(function () {
    return gulp.src('./src/*.pug')
        .pipe(pug({}))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
}));


gulp.task('dev', gulp.series('css', 'js', 'pug', 'browserSync', function() {
    gulp.watch('./scss/*.scss', ['css']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch([
        './src/partials/*.pug'
        , './src/partials/**/*.pug'
        // , './src/**/**/*.pug' 
    ], ['pug', browserSync.reload]);
}));