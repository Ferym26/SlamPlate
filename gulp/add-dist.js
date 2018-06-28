
module.exports = function(fs) {

	//ADD-DIST добавляет папки

	return function(cb) {

		fs.mkdirSync('specs');
		fs.mkdirSync('translates');

		cb();

	};
};