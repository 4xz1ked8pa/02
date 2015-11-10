var gulp = require('gulp');
var shell = require('gulp-shell');
var rucksack = require('gulp-rucksack');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var lr = require('tiny-lr');

gulp.task('default', ['css','start','watcher']);

gulp.task('start', shell.task(['./bin/www']));

gulp.task('css', function() {
	var processors = [
		autoprefixer
	]
//	var processors = [
//		autoprefixer
//	]
	return gulp.src('source/styles/*.css')
		.pipe(watch('source/styles/*.css'))
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
