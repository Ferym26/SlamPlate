const $window = $(window);
const $document = $(document);

$(document).ready(function() {

	slamPlate.ui();
	slamPlate.animations();
	slamPlate.preloader();

});

const slamPlate = new function() {

	this.ui = function() {

	};

	this.animations = function() {

		//GSAP + Waupoints
		let tl = new TimelineMax({paused: true});

		let tl2 = new TimelineMax();


		// let anim1 = tl.to(".block", 1, {
		// 				x: 200,
		// 				yoyo: true,
		// 				repeat: 3
		// 			});

		// anim1.pause();

		let anim2 = tl
			.from(".wrap .block", 3, {
				x: -200,
				ease:Elastic.easeOut,
				delay: 0,
				opacity: 0,
				// yoyo: true,
				// repeat: 1
				// onComplete: function() {
				// 	console.log('animation done!');
				// },
			}, 1)
			.from(".wrap2 .block", 0.5, {
				y: 200,
				ease:Elastic.easeOut,
				delay: 0,
				opacity: 0
				// yoyo: true,
				// repeat: 1
			}, 3, '-=3');

			let anim5 = tl2
				.addLabel('label-start')
				.to(".item1", 1, {
					// x: 0,
					y: 100,
					opacity: 0,
					// rotation: 45,
					ease: Power3.easeIn,
					delay: 0,
					yoyo: true,
					repeat: 1,
					// scale: 1.2,
					onComplete: function() {
						// console.log('animation .item1 done!');
					},
				})
				.to(".item2", 1, {
					y: 100,
					ease: Power3.easeIn,
				})
				.to(".item3", 1, {
					y: 100,
					ease: Power3.easeIn,
				}, 'label-start')
				.set(".item3", {
					y: 0,
				}, 'end');

		// let anim3 = tl.staggerFrom(".wrap2 .block", 1, {
		// 	y: -200,
		// 	ease:Elastic.easeOut,
		// 	delay: 1,
		// 	opacity: 0
		// 	// yoyo: true,
		// 	// repeat: 1
		// }, 0.2);

		$(".block").waypoint(function() {
			anim2.resume();
			// anim3.resume();
			}, {
				offset: '50%'
		});

















		//Animate.scss + WayPoints JS plugin with settings in sass
		$.fn.animated = function(animName) {
			$(this).each(function() {
				var ths = $(this);
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
					ths.addClass(animName);
				}, {
					offset: '50%'
				});

			});
		};

		//Init animation
		// .item - target item
		// animation-name - class from _animation.sass

		// $(".section_3 li").animated("s3_list--anim");
		// $(".section_3 .butn-wrap").animated("s3_butn--anim");
	};

	this.preloader = function() {

		let tl3 = new TimelineMax();

		//DROWsvg
		// var logoCloud = $('.logo-cloud').drawsvg({
		// 	duration: 1000,
		// 	stagger: 0,
		// 	easing: 'linear',
		// 	reverse: false,
		// 	callback: function() {
		// 		// console.log('drow done!');
		// 	},
		// });
		// logoCloud.drawsvg('animate');

		let logoLine = $('.logo-line').drawsvg({
			duration: 800,
			stagger: 0,
			easing: 'swing',
			reverse: false,
			callback: function() {
				// console.log('anim done');
			},
		});


		let logo = $('.biglogo');
		let preloader = $('.preloader');
		let tick = 0;
		let logoSvgTween = tl3
			.set(logo, {
				// scale: 0.8
			})
			.to(logo, 0.8, {
				opacity: 1,
				width: 200,
				height: 200,
				delay: 0.4,
				onComplete: function() {
					logoLine.drawsvg('animate');
					var tickInterval = setInterval(function() {
						logoLine.drawsvg('animate');
						tick++;
						if(tick >= 2) {
							clearInterval(tickInterval);
						}
					}, 1000);
				}
			})
			.addLabel("preloadUP", "+=3")
			.to(preloader, 0.5, {
				height: 90,
				ease: Power4.easeIn,
				delay: 0,
			}, "preloadUP")
			.to(logo, 0.5, {
				height: 44,
				width: 44,
				ease: Power4.easeIn,
				delay: 0,
				left: 22,
				// opacity: 0
				onComplete: function() {
					logo.addClass('biglogo--hover');
				}
			}, "preloadUP")
			// .to(preloader, 0.5, {
			// 	autoAlpha: 0,
			// 	delay: 3.5,
			// }, "preloadUP")
			// .remove(preloader)

		let timerLogo;

		$(document).on({
			mouseenter: function () {
				logoLine.drawsvg('animate');
				timerLogo = setInterval(function() {
					logoLine.drawsvg('animate');
				}, 1500);
			},
			mouseleave: function () {
				timerLogo = clearInterval(timerLogo);
			}
		}, '.biglogo--hover');
	};
};
