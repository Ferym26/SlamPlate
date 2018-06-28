
module.exports = function (gulp, plugins, libs, browserSync, op) {

	//PUG

	return function (cb) {

		new Promise((resolve, reject) => {
			libs.emitty.scan(global.emittyChangedFile).then(() => {
				gulp.src('src/pages/*.pug', { read: false })
					.pipe(libs.gulpif(global.watch, libs.emitty.filter(global.emittyChangedFile)))
					.pipe(plugins.pug({ 
						pretty: true,
						locals: op
					}))
					.on('error', plugins.notify.onError({
						title: 'PUG error'
					}))
					.pipe(gulp.dest('app'))
					.on('end', resolve)
					.on('error', reject)
					// .pipe(browserSync.reload({stream: true}));
			});
		})

		cb();
		
	};
};