module.exports = function (libs, folder) {

	//Удаляет папку

	return function (cd) {

		cd()

		return libs.del(folder);
		
	};
};