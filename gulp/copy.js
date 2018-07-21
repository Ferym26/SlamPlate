module.exports = function(gulp, from, to) {

	// Копирование файлов

	return function(cb) {

		gulp.src('./src/assets/fonts/**/*.{woff,woff2}')
			.pipe(gulp.dest('app/fonts'));

		gulp.src('./src/assets/js/*.js')
			.pipe(gulp.dest('app/js'));

		cb();
	};
};