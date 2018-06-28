
module.exports = function (gulp, plugins) {

	//Генерация фавиконок

	return function (cb) {
		
		function favSize(size, name) {
			gulp.src('core/favicon/favicon-base.png')
				.pipe(plugins.imageResize({
					width: size,
					height: size,
					crop: false,
					upscale: false
				}))
				.pipe(plugins.rename(name))
				.pipe(gulp.dest('app/img/favicon/'));
		};

		favSize(114, "apple-touch-icon-114x114.png");

		favSize(72, "apple-touch-icon-72x72.png");

		favSize(57, "apple-touch-icon.png");

		favSize(48, "favicon.png");

		cb();

	};
};