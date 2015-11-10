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

gulp.task('default', ['css','jsx','start','watcher','watcher2']);

gulp.task('start', shell.task(['./bin/www']));

gulp.task('css', function() {
	return gulp.src('source/styles/*.css')
		.pipe(watch('source/styles/*.css'))
		.pipe(postcss([lost(),autoprefixer(),postcss_nested()]))
		.pipe(rucksack())
		.pipe(gulp.dest('public/styles'));
});

gulp.task('jsx', function() {
	return gulp.src('source/js/**/*.jsx')
		.pipe(watch('source/js/**/*.jsx'))
		.pipe(babel())
		.pipe(gulp.dest('public/js'));
});

gulp.task('watcher', function(cb) {
	watch('source/styles/*.css', function() {
		gulp.src('source/styles/*.css')
			.pipe(watch('source/styles/*.css'))
			.on('end',cb);
	});
});

gulp.task('watcher2', function(cb) {
	watch('source/js/**/*.jsx', function() {
		gulp.src('source/js/**/*.jsx')
			.pipe(watch('source/js/**/*.jsx'))
			.on('end',cb);
	});
});