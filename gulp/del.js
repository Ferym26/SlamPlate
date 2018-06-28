
module.exports = function (libs, folder) {

	//Удаляет папку

	return function () {

		return libs.del(folder);
		
	};
};