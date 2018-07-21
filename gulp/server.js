module.exports = function (browserSync, op) {

	//SERVER

	return function () {
		
		browserSync.init({
			server: {
				baseDir: op.path.dev.html
			},
			port: 7500,
			notify: false,
			reloadDelay: 100,
			// tunnel: op.project.name //Demonstration page: http://projectname.localtunnel.me
		});
	};
};