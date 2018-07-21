module.exports = function (gulp, plugins, ftp, op, libs) {

	//DEPLOY

	return function (cb) {

		var conn = libs.ftp.create({
			host: 'ctr-localhost.ru',
			user: 'gordey',
			password: 'V4o7U7k7',
			parallel: 10,
			log: plugins.util.log
		});

		var globs = [
			'app/**'
		];

		console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<< ССЫЛКА НА ФТП >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		console.log(" ");
		console.log("ctr-localhost.ru/gordey/" + op.project.date + "/" + op.project.name);
		console.log(" ");
		console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<< /ССЫЛКА НА ФТП >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

		gulp.src(globs, { buffer: false })
			.pipe(conn.dest(op.project.date + "/" + op.project.name));

		cb();

	};
};