module.exports = function(gulp, plugins, op) {

	//Инлайнит svg спрайт в HTML

	return function(cb) {

		gulp.src('./app/index.html')
			.pipe(plugins.inject(
				gulp.src(['./app/img/sprite.svg']),
				{ transform: function (filePath, file) { return file.contents.toString('utf8') } }
			))
			.pipe(gulp.dest('./test'));

		cb();

	};
};