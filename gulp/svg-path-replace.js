module.exports = function(gulp, plugins, libs, op) {

	//Замена путей у элементов SVG спрайта
	// <use xlink:href="./img/sprite.svg#poison"></use>
	// <use xlink:href="#poison"></use>

	return function(cb) {

		gulp.src('test/*.html')
			// .pipe(libs.replaceReg({
			// 	patterns: [
			// 		{
			// 			match: /\.\/img\/sprite\.svg/,
			// 			replacement: ''
			// 		}
			// 	]
			// }))
			.pipe(plugins.replace('./img/sprite.svg', ''))
			.pipe(gulp.dest('test/'));

		cb();
	};
};