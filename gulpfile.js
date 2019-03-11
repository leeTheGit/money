var gulp        = require('gulp');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var gp_rename   = require("gulp-rename");
var gutil       = require('gulp-util');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var minifyCss   = require("gulp-clean-css");
var hasher      = require('gulp-hasher');
// var buster      = require('gulp-cache-buster');
var runSequence = require('run-sequence');


// gulp.task('styles', function(callback) {
//     runSequence('sass', 'concat', 'minify-css', callback);
// });


// gulp.task('cache',  function() {
//   return gulp.src('layouts/main.twig')
//     .pipe(buster({
//       tokenRegExp: /\/(concat\.min\.css)\?v=[0-9a-z]+/,
//       assetRoot: __dirname + '/static/deploy/',
//       hashes: hasher.hashes,
//     }))
//     .pipe(gulp.dest('layouts/'));
// });


gulp.task('minify-css', function () {
    return gulp.src([
        './src/assets/styles/concat.css',
    ]) 
    .pipe(gp_rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest('./src/assets/styles'))
    .pipe(hasher());
 });
 

 gulp.task('concat', function () {
    return gulp.src([
        './css/reset.css',
        './css/main.css',
    ]) // path to your file
    .pipe(concat('concat.css'))
 
    .pipe(gulp.dest('./src/assets/styles'));
 });
 

 gulp.task('sass', function() {
    return gulp.src([
            './css/main.scss',
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: [
            './css/components', 
        ]}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
 });
 
 


 gulp.task('styles', gulp.series('sass', 'concat', 'minify-css'));




gulp.task('watch', function (){
	gulp.watch('./static/css/**/*.scss', ['styles']);
});

// gulp.task('default', ['styles']);