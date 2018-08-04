module.exports = function (gulp, plugins, libs, op, browserSync) {

	// STYLES

	return function (cb) {
		
		return gulp.src(op.path.src.styles + 'styles.{sass,scss}')
			.pipe(plugins.sourcemaps.init())
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
			// .pipe(libs.cleanCSS())
			.pipe(plugins.rename({
				suffix: '.min',
				prefix : ''
			}))
			.pipe(plugins.sourcemaps.write())
			.pipe(gulp.dest(op.path.dev.css))
			.pipe(browserSync.stream());

		cb();

		return gulp.src(op.path.src.styles + 'wysiwyg.{sass,scss}')
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
			.pipe(gulp.dest(op.path.dev.html))
			.pipe(browserSync.stream());

		cb();
		
	};
};