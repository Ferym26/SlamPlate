
module.exports = function (gulp, plugins, libs, browserSync) {

	// STYLES

	return function (cb) {
		
		gulp.src(['src/assets/sass/*.{scss,sass}'])
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.wait(200))
			.pipe(plugins.sass({
				outputStyle: 'expanded',
				errLogToConsole: true,
			}))
			.on('error', plugins.notify.onError({
				title: 'SASS error'
			}))
			//.pipe(plugins.rename({suffix: '.min', prefix : ''}))
			.pipe(plugins.autoprefixer({
				browsers: [
					'> 1%',
					'last 2 versions',
					'ie 11'
				],
				cascade: false
			}))
			// .pipe(libs.cleanCSS())
			.pipe(plugins.sourcemaps.write())
			.pipe(gulp.dest('local/templates/html/css'))
			.pipe(browserSync.stream());

		cb();
		
	};
};