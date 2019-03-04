$(document).ready(function(){
	// header lang
	$('.lang').click(function(e){
		e.preventDefault();
		$('.langwrap').toggleClass('on');
	})

	// gnb
	$('.lines').click(function(e){
		e.preventDefault();
		$('.gnbwrap').addClass('on');
		$('#header').css('display', 'none')
	})

	$('.close_btn').click(function(e){
		e.preventDefault();
		$('#header').css('display', 'block')
		$('.gnbwrap').removeClass('on');
	})

	//아코디언 메뉴
	$('.sub_title').click(function(e){
		e.preventDefault();
		if($(this).hasClass('on')==false){
			$('.sub_title').addClass('close').removeClass('on')
			$(this).addClass('on').removeClass('close')

			$(this).next().slideDown();
			$('.close').next().slideUp();		
		}
	})

	//press 슬라이드
	$('.pressul').bxSlider({
		mode: 'horizontal', 
		auto: true,
		speed: 1000,  
		pause: 4000, 
		controls: false, 
		pager: true, 
		infiniteLoop: true, 
		tickerHover: true, 
		touchEnabled: true, 
		useCSS: false,
		slideWidth: 1000,
		slideMargin: 20,
		minSlides: 2,   
		maxSlides: 2,     
	})

	/* public */
	var listint
	$('.public_sub li').click(function(e){
		e.preventDefault();
		listint = $(this).index();

		$('.public_sub li').removeClass('on')
		$(this).addClass('on')

		public(listint);
	})

	function public(num){
		$('.public_cont li').removeClass('on');
		$('.public_cont li').eq(num).addClass('on');
	}

	$('.info_btn').click(function(e){
		e.preventDefault();
		$(this).toggleClass('on');

		if($(this).hasClass('on')==true){
			$(this).find('.btn_txt').text('자막열기')
		}
		else{
			$(this).find('.btn_txt').text('자막닫기')
		}
	})
})