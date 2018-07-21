module.exports = function (gulp, plugins, op) {

	// Сжатие картинок и перенос графики

	return function (cb) {

		gulp.src(op.path.dev.img + '**/*.{png,jpg}')
			.pipe(plugins.newer(op.path.build.img))
			.pipe(plugins.tinypng('cnCFvNA9iXZzylFV1NvIMBOK_B-lfQ8j')) /*	mFRFYwtT5RzHnUejwvD7Uw0sOVAA8rcM	*/
			.pipe(gulp.dest(op.path.build.img));

		gulp.src([
				'./app/img/*.svg',
				'!./app/img/sprite.svg'
			])
			.pipe(gulp.dest(op.path.build.img));

		cb();

	};
};