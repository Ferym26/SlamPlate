$(document).ready(function() {


	//фикс svg спрайта для ИЕ
	// svg4everybody();


	$('.toform').click(function() {
		$("html, body").animate({
			scrollTop: $("#order_form").offset().top - 10
		}, {
			duration: 1000,
			easing: "swing"
		});
		return false;
	});





	//Анимации
	//Animate.scss + WayPoints JS plugin with settings in sass
	$.fn.animated = function(animName) {
		$(this).each(function() {
			var ths = $(this);
			$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
				ths.addClass(animName);
			}, {
				offset: '85%'
			});

		});
	};

	//Init animation
	// .item - target item
	// animation-name - class from _animation.sass

	// $(".section_3 li").animated("s3_list--anim");
	// $(".section_3 .butn-wrap").animated("s3_butn--anim");

});
