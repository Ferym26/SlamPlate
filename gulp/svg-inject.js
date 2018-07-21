module.exports = function(gulp, plugins, op) {

	//Инлайнит svg спрайт в HTML

	return function(cb) {

		gulp.src(op.path.dev.html + '**/*.html')
			.pipe(plugins.inject(
				gulp.src([
					op.path.dev.img + 'sprite.svg'
				]),
				{ transform: function (filePath, file) { return file.contents.toString('utf8') } }
			))
			.pipe(gulp.dest(op.path.build.html));

		cb();

	};
};