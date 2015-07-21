var gulp = require('gulp');
var karma = require('karma').server;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var path = require('path');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var ngHtml2Js = require('gulp-ng-html2js');
var minifyHTML = require('gulp-minify-html');

/**
 * File patterns
 **/

// Root directory
var rootDirectory = path.resolve('./');

// Source directory for build process
var sourceDirectory = path.join(rootDirectory, './src');
var cssSourceFiles = [
  path.join(sourceDirectory, '/**/*.scss'),
  path.join(sourceDirectory, '/**/**/*.scss')
];

var htmlSourceFiles = [
  path.join(sourceDirectory, '/**/*.html'),
  path.join(sourceDirectory, '/**/**/*.html')
];


var sourceFiles = [

  // Make sure module files are handled first
  path.join(sourceDirectory, '/**/*.module.js'),

  // Then add all JavaScript files
  path.join(sourceDirectory, '/**/*.js'),
  path.join('./src/tempPartials/*.js')
];

var lintFiles = [
  'gulpfile.js',
  // Karma configuration
  'karma-*.conf.js'
].concat(sourceFiles);
// .concat(cssSourceFiles);

gulp.task('sass', function () {
  gulp.src(cssSourceFiles)
  .pipe(plumber())
  .pipe(sass())
  .pipe(minifyCss({compatibility: '*'}))
  .pipe(concat('angular-startup-library.min.css'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('html2js', function(){
  gulp.src(htmlSourceFiles)
    .pipe(plumber())
    .pipe(minifyHTML())
    .pipe(ngHtml2Js({
        moduleName: 'aslPartials',
        prefix: ''
    }))
    .pipe(concat('angular-startup-library-partials.js'))
    .pipe(gulp.dest('./src/tempPartials/'));
});

gulp.task('build', function() {


  gulp.src(sourceFiles)
    .pipe(plumber())
    .pipe(concat('angular-startup-library.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename('angular-startup-library.min.js'))
    .pipe(gulp.dest('./dist'));
});

/**
 * Process
 */
gulp.task('process-all', function(done) {
  runSequence( 'test-src', 'sass', 'html2js', 'build', done);
});

/**
 * Watch task
 */
gulp.task('watch', function() {

  // Watch JavaScript files
  gulp.watch(sourceFiles, ['process-all']);
  gulp.watch(cssSourceFiles, ['process-all']);
  gulp.watch(htmlSourceFiles, ['process-all']);
});

/**
 * Validate source JavaScript
 */
gulp.task('jshint', function() {
  return gulp.src(lintFiles)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

/**
 * Run test once and exit
 */
gulp.task('test-src', function(done) {
  karma.start({
    configFile: __dirname + '/karma-src.conf.js',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-concatenated', function(done) {
  karma.start({
    configFile: __dirname + '/karma-dist-concatenated.conf.js',
    singleRun: true
  }, done);
});

/**
 * Run test once and exit
 */
gulp.task('test-dist-minified', function(done) {
  karma.start({
    configFile: __dirname + '/karma-dist-minified.conf.js',
    singleRun: true
  }, done);
});

gulp.task('default', function() {
  runSequence('process-all', 'watch');
});
