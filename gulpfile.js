var gulp = require('gulp');
var shell = require('gulp-shell');
var rucksack = require('gulp-rucksack');
var postcss = require('gulp-postcss');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var lr = require('tiny-lr');

var lost = require('lost');
var autoprefixer = require('autoprefixer');
var postcss_nested = require('postcss-nested');

gulp.task('default', ['css','start','watcher']);

gulp.task('start', shell.task(['./bin/www']));

gulp.task('css', function() {
//	var processors = [
//		autoprefixer
//	]
	return gulp.src('source/styles/*.css')
		.pipe(watch('source/styles/*.css'))
		.pipe(postcss([lost(),autoprefixer(),postcss_nested()]))
		.pipe(rucksack())
		.pipe(gulp.dest('public/styles'));
});

gulp.task('watcher', function(cb) {
	watch('source/styles/*.css', function() {
		gulp.src('source/styles/*.css')
			.pipe(watch('source/styles/*.css'))
			.on('end',cb);
	});
});
