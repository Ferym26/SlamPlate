
module.exports = function (browserSync, op) {

	//SERVER

	return function () {
		
		browserSync.init({
			server: {
				baseDir: 'app'
			},
			port: 7500,
			notify: false,
			// reloadDelay: 200,
			// tunnel: op.project.name //Demonstration page: http://projectname.localtunnel.me
		});
	};
};