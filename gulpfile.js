var gulp = require('gulp');
var shell = require('gulp-shell');
var postcss = require('gulp-postcss');
var livereload = require('gulp-livereload');

gulp.task('default', ['css','start','watch']);

gulp.task('start', shell.task(['./bin/www']));

gulp.task('css', function() {
	var processors = [
		
	]
	
	return gulp.src('/source/styles/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('public/styles'));
});

gulp.task('watch', function(){
	livereload.listen({start: true});
	gulp.watch('/source/styles/*.css',['css']);
});
