module.exports = function(gulp, plugins, op) {

	//Замена путей у элементов SVG спрайта
	// <use xlink:href="./img/sprite.svg#poison"></use>
	// <use xlink:href="#poison"></use>

	return function(cb) {

		gulp.src(op.path.build.html + '**/*.html')
			// .pipe(libs.replaceReg({
			// 	patterns: [
			// 		{
			// 			match: /\.\/img\/sprite\.svg/,
			// 			replacement: ''
			// 		}
			// 	]
			// }))
			.pipe(plugins.replace('./img/sprite.svg', ''))
			.pipe(gulp.dest(op.path.build.html));

		cb();
	};
};