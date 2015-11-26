var gulp = require('gulp');
var shell = require('gulp-shell');
//var rucksack = require('gulp-rucksack');
//var postcss = require('gulp-postcss');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var lr = require('tiny-lr');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var sass = require('gulp-sass');

//var lost = require('lost');
//var autoprefixer = require('autoprefixer');
//var postcss_simple_vars = require('postcss-simple-vars');
//var postcss_nested = require('postcss-nested');
//var postcss_hexrgba = require('postcss-hexrgba');
//var postcss_import = require('postcss-import');
//var cssnext = require('gulp-cssnext');

//variables: function() {
//	return require('./source/styles/settings/variables');
//}

gulp.task('default', ['css','jsbundling','start','watcher4','watcher2']);

gulp.task('start', shell.task(['./bin/www']));

gulp.task('css', function() {
	gulp.src('./source/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/styles'));
});

// This section was for PostCSS compiling
//
// gulp.task('css', function() {
//	//var vars = require('./source/styles/settings/variables');
//	return gulp.src('source/styles/**/*.css')
//		.pipe(cssnext())
//		.pipe(postcss([postcss_simple_vars({
//				variables: function(){
//					return require('./source/styles/settings/variables');
//				}
//		}),lost(),autoprefixer(),postcss_hexrgba(),postcss_import(),postcss_nested()]))
//		.pipe(rucksack())
//		.pipe(gulp.dest('public/styles'));
//});

//gulp.task('jsx', function() {
//	return gulp.src('source/js/**/*.jsx')
//		.pipe(watch('source/js/**/*.jsx')
//		.pipe(babel({
//			presets: ['es2015']
//		}))
//		.pipe(gulp.dest('public/js'));
//});

gulp.task('jsbundling', function() {
	b = browserify();
	b.transform(reactify);
	b.add('source/js/frontend.jsx');
	return b.bundle()
		.pipe(source('frontend.js'))
		.pipe(gulp.dest('public/js'));
});

//gulp.task('watcher', function(cb) {
//	watch('source/styles/**/*.css', function() {
//		gulp.src('source/styles/**/*.css')
//			.pipe(watch('source/styles/**/*.css'))
//			.on('end',cb);
//	});
//});

// Watcher for Sass .scss files
gulp.task('watcher4', function() {
	gulp.watch('./source/styles/**/*.scss', ['css']);
});

// Watcher to be used with PostCSS compiler
//
//gulp.task('watcher3', function(){
//	watch('source/styles/**/*.css', function() {
//		gulp.start('css');
//	});
//});

gulp.task('watcher2', function() {
	watch('source/js/**/*.jsx', function() {
		gulp.start('jsbundling');
	});
});