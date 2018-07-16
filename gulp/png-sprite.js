
module.exports = function (gulp, plugins) {

	//Sprite PNG

	return function (cb) {

		var spriteData =
			gulp.src('core/sprites/png/*.{png,jpg}')
			.pipe(plugins.spritesmith({
				imgName: 'sprite.png',
				cssName: '_sprite.css',
				cssFormat: 'css',
				imgPath: '../img/sprite.png',
				padding: 10
			}));


		spriteData.img.pipe(gulp.dest('app/img/'));
		spriteData.css.pipe(gulp.dest('core/sprites/png/'))
			.pipe(plugins.rename({ extname: ".scss" }))
			.pipe(gulp.dest('core/sprites/png/'));

		cb();

	};
};