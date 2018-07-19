const gulp			= require('gulp'); // gulp
const plugins		= require('gulp-load-plugins')(); // Автоматическая подгрузка gulp плагинов

const del			= require('del');
const ftp			= require('vinyl-ftp');
const fs			= require('fs');

const browserSync	= require('browser-sync').create();
const op			= require('./options.js');




// Дополнительные либы Node.js
const libs = {

	del: require('del'),
	ftp: require('vinyl-ftp'),
	fs: require('fs'),
	gulpif: require('gulp-if'),
	cleanCSS: require('gulp-clean-css'),
	criticalCss: require('gulp-penthouse'),

	sprity: require('sprity'),

	emitty: require('emitty').setup('src/pages', 'pug', {  makeVinylFile: true})	
}

const tasks = './gulp/';  // Путь к gulp таскам


gulp.task('svg-inject', function (cb) {
	gulp.src('./app/index.html')
		.pipe(plugins.inject(
			gulp.src(['./app/img/sprite.svg']),
			{ transform: function (filePath, file) { return file.contents.toString('utf8') } }
		))
		.pipe(gulp.dest('./test'));

	cb();
});


//Сборка стилей sass
gulp.task('styles', require(tasks + 'styles')(gulp, plugins, libs, op, browserSync));

//Critical CSS стили
gulp.task('critical', require(tasks + 'critical')(gulp, plugins, libs, op));

//Сборка разметки pug
gulp.task('pug', require(tasks + 'pug')(gulp, plugins, libs, op));

//Копирование файлов
gulp.task('copy-files', require(tasks + 'copy')(gulp));

//Добавляет папки
// gulp.task('add-dist', require(tasks + 'add-dist')(fs));

//Создает фавки для мобильных
gulp.task('fav-resize', require(tasks + 'fav-resize')(gulp, plugins));

// SPRITES
gulp.task('sprite:svg', require(tasks + 'svg')(gulp, plugins, op));
gulp.task('sprite:svg-bg', require(tasks + 'svg-bg')(gulp, plugins, op));
// gulp.task('sprite:png', require(tasks + 'sprite-png')(gulp, plugins));

//Заливка на хостинг
gulp.task('deploy', require(tasks + 'deploy')(gulp, plugins, ftp, op, libs));

//Запуск локального сервера
gulp.task('server', require(tasks + 'server')(browserSync, op));


//Вотчеры
gulp.task('watch', () => {

	gulp.watch(op.path.watch.styles, gulp.series('styles'));

	global.watch = true;

	gulp.watch([op.path.watch.pug], gulp.series('pug'))
		.on('all', (event, filepath) => {
			global.emittyChangedFile = filepath;
		});

	gulp.watch(op.path.watch.js).on("change", browserSync.reload);
	gulp.watch(op.path.watch.html).on('change', browserSync.reload);

	// gulp.watch(['core/sprites/png/*.{png,jpg}'], gulp.series('sprite:png'));
	gulp.watch([op.path.src.sprites + 'svg/*.svg'], gulp.series('sprite:svg'));
	gulp.watch([op.path.src.sprites + 'svgBg/*.svg'], gulp.series('sprite:svg-bg'));

});





gulp.task('create', gulp.series('fav-resize', 'copy-files'));

gulp.task('default', gulp.parallel('server',
	gulp.series(
		'pug',
		'styles',
		'sprite:svg', 
		'sprite:svg-bg'
	), 'watch')
);