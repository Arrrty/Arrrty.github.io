$(function(){

$('nav a').on('click', function(event){
	event.preventDefault();

	let href = $(this).attr('href');

	let offset = $(href).offset().top;

	$('body, html').animate({
		scrollTop: offset,
	}, 700);
});

$('.header-panel__menu img').click(function(){
    if($('.menu-mobail').css('display') == 'none') {
        $('.menu-mobail').css({
            display: 'inline-block'
        });
    } else {
        $('.menu-mobail').css({
            display: 'none'
        });
    }
});

$('.menu-mobail nav a').click(function(){
	$('.menu-mobail').css({
		display: 'none'
	});
});

$('.to-order').click(function(){
	$('.phone').fadeIn(500);


	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});
});

$('.info').click(function(){
	$('.email').fadeIn(500);

	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});
});

$('.phone').click(function(event){
	if(event.target == this) {
		$(this).fadeOut(500);
	
		$('html, body').css({
			overflow: 'visible',
			height: 'auto'
		});
		$('.phone .form-err').css({
			display: 'none'
		});
		$('.phone-box').val('')
		$('.name-box').val('')
		$('.email-box').val('')
	}
});

$('.email').click(function(event){
	if(event.target == this) {
		$(this).fadeOut(500);
		
		$('html, body').css({
		    overflow: 'visible',
		    height: 'auto'
		});
		$('.email .form-err').css({
			display: 'none'
		});
		$('.phone-box').val('')
		$('.name-box').val('')
		$('.email-box').val('')
	}
});

$('.phone form input:last-child').click(function(){
	if ($('.phone .phone-box').val() === '' || $('.phone .name-box').val() === '') {
		$('.phone .form-err').css({
			display: 'inline-block'
		});
	} else if (/_/.test($('.phone .phone-box').val())) {
		$('.phone .form-err').css({
			display: 'inline-block'
		});
	} else {
		$('.phone').fadeOut(500);
			
		$('html, body').css({
			overflow: 'visible',
			height: 'auto'
		});

		$('.done').animate({
			opacity: 1,
			'z-index': 1,
		}, 1000, "linear", setTimeout(function() {
				$('.done').animate({
					opacity: 0, 
					'z-index': -1
				}, {duration: 1000, easing: "linear", queue: false});
			}, 5000)
		);

		$('.phone .form-err').css({
			display: 'none'
		});

		$('.phone .phone-box').val('')
		$('.phone .name-box').val('')
	}
	
});

$('.email form input:last-child').click(function(){
	if ($('.email .phone-box').val() === '' || $('.email .name-box').val() === '' || $('.email .email-box').val() === '') {
		$('.email .form-err').css({
			display: 'inline-block'
		});
	} else if (/_/.test($('.email .phone-box').val())) {
		$('.email .form-err').css({
			display: 'inline-block'
		});
	} else {
		$('.email').fadeOut(500);
			
		$('html, body').css({
			overflow: 'visible',
			height: 'auto'
		});

		$('.done').animate({
			opacity: 1,
			'z-index': 1,
		}, 1000, "linear", setTimeout(function() {
				$('.done').animate({
					opacity: 0, 
					'z-index': -1
				}, {duration: 1000, easing: "linear", queue: false});
			}, 3000)
		);

		$('.email .form-err').css({
			display: 'none'
		});

		$('.phone-box').val('')
		$('.name-box').val('')
		$('.email-box').val('')
	}
});

if (window.innerWidth > 1190) {
	$('.works__list').slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		variableWidth: true,
		adaptiveHeight: true,
	});
} else {
	$('.works__list').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		variableWidth: true,
		adaptiveHeight: true,
	});
}



});