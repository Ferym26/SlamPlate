module.exports = function(gulp, libs, op) {

	//Замена путей у элементов SVG спрайта
	// <use xlink:href="./img/sprite.svg#poison"></use>
	// <use xlink:href="#poison"></use>

	return function(cb) {

		gulp.src('test/*.html')
			.pipe(libs.replace({
				patterns: [
					{
						match: /\.\/img\/sprite\.svg/,
						replacement: ''
					}
				]
			}))
			.pipe(gulp.dest('test/'));

		cb();
	};
};