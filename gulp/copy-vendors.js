module.exports = function (gulp, plugins, op) {

	//COPY-VENDORS копирование вендорных файлов в зависимости от типа пректа
	//TODO разобраться с вызовом copy

	return function (cb) {

		let fileL = './base_folders/frontend_L/vendors/';
		let fileP = './base_folders/frontend_P/vendors/';
		// let dest = './app/js';

		if (op.project.type === 'land') {

			// gulp.task('copy', require('./copy')(gulp, fileL + '*.js', dest));

			// gulp.task('copy', require('./copy')(gulp, fileL + '*.{png,jpg,gif,svg}', dest));

			// console.log(fileL + '*.js');

			gulp.src(fileL + '*.js')
				.pipe(gulp.dest('app/js'));

			gulp.src([fileL + '*.{png,jpg,gif,svg}'])
				.pipe(gulp.dest('app/img'));

			cb();

		} else if (op.project.type === 'preland') {

			gulp.src(fileP + '*.js')
				.pipe(gulp.dest('app/js'));

			cb();

		} else {

			console.log('Ничего не верстаем =( Ошибка указании типа проекта. Верно заполните options.js');

			cb();
			
		}

	};
};