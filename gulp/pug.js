module.exports = function (gulp, plugins, libs, op) {

	//PUG

	return function (cb) {

		new Promise((resolve, reject) => {
			libs.emitty.scan(global.emittyChangedFile).then(() => {
				gulp.src(op.path.src.pug, { read: false })
					.pipe(libs.gulpif(global.watch, libs.emitty.filter(global.emittyChangedFile)))
					.pipe(plugins.pug({ 
						pretty: true
					}))
					.on('error', plugins.notify.onError({
						title: 'PUG error'
					}))
					.pipe(plugins.debug({title: "Emitty: "}))
					.pipe(gulp.dest(op.path.dev.html))
					.on('end', resolve)
					.on('error', reject)
			});
		})

		cb();
		
	};
};