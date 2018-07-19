module.exports = {

	path: {
		dev: {
			html: './app/',
			css: './app/css/',
			js: './app/js/',
			img: './app/img/'			
		},
		src: {
			pug: './src/pages/*.pug',
			styles: './src/assets/sass/',
			sprites: './src/assets/sprites/'
		},
		watch: {
			pug: './src/**/*.pug',
			styles: './src/**/*.{scss,sass}',
			html: 'app/*.html',
			js: './app/js/**/*.js',
			svg: './app/svg/*.svg'
		},
		build: {
			html: './local/templates/html/',
			css: './local/templates/css/',
			img: './local/templates/img/'
		}
	}
};