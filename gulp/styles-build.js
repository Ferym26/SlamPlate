module.exports = function (gulp, plugins, libs, op) {

	// STYLES BUILD

	return function (cb) {
		
		gulp.src(op.path.src.styles + 'styles.sass')
			// .pipe(plugins.sourcemaps.init())
			// .pipe(plugins.wait(200))
			.pipe(plugins.sass({
				outputStyle: 'expanded',
				errLogToConsole: true,
			}))
			.on('error', plugins.notify.onError({
				title: 'SASS error'
			}))
			.pipe(plugins.autoprefixer({
				browsers: [
					'> 1%',
					'last 2 versions',
					'ie 11'
				],
				cascade: false
			}))
			.pipe(libs.cleanCSS())
			.pipe(plugins.rename({
				suffix: '.min',
				prefix : ''
			}))
			// .pipe(plugins.sourcemaps.write())
			.pipe(gulp.dest(op.path.build.css))
			// .pipe(browserSync.stream());

		cb();

		gulp.src(op.path.src.styles + 'wysiwyg.sass')
			// .pipe(plugins.sourcemaps.init())
			// .pipe(plugins.wait(200))
			.pipe(plugins.sass({
				outputStyle: 'expanded',
				errLogToConsole: true,
			}))
			.on('error', plugins.notify.onError({
				title: 'SASS error'
			}))
			.pipe(plugins.autoprefixer({
				browsers: [
					'> 1%',
					'last 2 versions',
					'ie 11'
				],
				cascade: false
			}))
			.pipe(libs.cleanCSS())
			.pipe(plugins.rename({
				basename: 'styles'
			}))
			// .pipe(plugins.sourcemaps.write())
			.pipe(gulp.dest(op.path.build.html))
			// .pipe(browserSync.stream());

		cb();
		
	};
};