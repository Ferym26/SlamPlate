
module.exports = function(gulp, file, dest) {

	// Копирование файлов

	return function(cb) {

		gulp.src(file)
			.pipe(gulp.dest(dest));

		cb();
	};
};