'use strict';

module.exports = function(gulp, plugins, op) {

    return function () {

        return gulp.src(op.path.src.sprites + 'svgBg/*.svg')
            // minify svg
            .pipe(plugins.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe(plugins.cheerio({
                run: function ($) {
                    //$('[fill]').removeAttr('fill');
                    //$('[stroke]').removeAttr('stroke');
                    //$('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe(plugins.replace('&gt;', '>'))
            .pipe(plugins.svgSprite({
				shape: {
					spacing: {
						padding: 5
					}
				},
				mode: {
					css: {
						dest: "./",
						layout: "diagonal",
						sprite: './spriteBg.svg',
						bust: false,
						render: {
							scss: {
								dest: "../../src/assets/libs/svgBg/_sprite.scss",
								template: "src/assets/libs/svgBg/sprite-template.scss"
							}
						}
					}
				},
				variables: {
					mapname: "icons"
				}
			}))
            .pipe(gulp.dest(op.path.dev.img));

    };

};

