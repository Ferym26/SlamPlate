
module.exports = function (gulp, plugins) {

	//Генерация фавиконок

	return function (cb) {
		
		function favSize(size, name) {
			gulp.src('src/assets/images/favicon/favicon-base.png')
				.pipe(plugins.imageResize({
					width: size,
					height: size,
					crop: false,
					upscale: false
				}))
				.pipe(plugins.rename(name))
				.pipe(gulp.dest('app/img/favicon/'));
		};

		favSize(192, "android-chrome-192x192.png");
		favSize(180, "apple-touch-icon.png");
		favSize(32, "favicon-32x32.png");
		favSize(16, "favicon-16x16.png");

		cb();

	};
};