module.exports = function(gulp, plugins, libs, op) {

	//

	return function(cb) {
		gulp.src([
			op.path.dev.html + 'styles.css',
			op.path.dev.css + 'styles.min.css'
			])
			.pipe( libs.criticalCss({
				out: 'critical.css',
				url: 'http://localhost:7500/index.html',
				//width: 1920,
				height: 1024,
				strict: true,
				userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
			}))
			.pipe(plugins.concat('all.css'))
			.pipe(plugins.rename({
				basename: 'critical',
				extname: '.css'
			}))
			.pipe(libs.cleanCSS())
			.pipe(gulp.dest(op.path.dev.css))

		cb();
	}
};