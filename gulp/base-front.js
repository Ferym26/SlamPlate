module.exports = function(gulp, plugins, op) {

	// BASE-FRONT Копирует файлы под тип проекта ленд/преленд

	return function(cb) {

		// let fileL = 'base_folders/frontend_L/**/*';
		// let fileP = 'base_folders/frontend_P/**/*';
		// let dest = 'frontend';

		if (op.project.type === 'land') {

			// gulp.task('copy', require('./copy')(gulp, fileL, dest));

			gulp.src(['base_folders/frontend_L/**/*'])
				.pipe(gulp.dest('frontend'));

			console.log('Верстаем ЛЕНД!');

			cb();

		} else if (op.project.type === 'preland') {			

			// gulp.task('copy', require('./copy')(gulp, fileP, dest));

			gulp.src(['base_folders/frontend_P/**/*'])
				.pipe(gulp.dest('frontend'));

			console.log('Верстаем ПРОКЛУ!');

			cb();

		} else {

			console.log('Ничего не верстаем =( Ошибка указании типа проекта. Верно заполните options.js');

			cb();
			
		}

	};
};