$(document).ready(function(){
	// header lang
	$('.lang').click(function(e){
		e.preventDefault();
		$('.lang-wrap').toggleClass('on');
	})

	// gnb
	$('.lines').click(function(e){
		e.preventDefault();
		$('.gnb-wrap').addClass('on');
		$('#header').css('display', 'none')
	})

	$('.close-btn').click(function(e){
		e.preventDefault();
		$('#header').css('display', 'block')
		$('.gnb-wrap').removeClass('on');
	})

	//아코디언 메뉴
	$('.sub-title').click(function(e){
		e.preventDefault();
		if($(this).hasClass('on')==false){
			$('.sub-title').addClass('close').removeClass('on')
			$(this).addClass('on').removeClass('close')

			$(this).next().slideDown();
			$('.close').next().slideUp();		
		}
	})

	//press 슬라이드
	$('.press-list').bxSlider({
		speed: 1000,  
		pause: 4000, 
		controls: false, 
		infiniteLoop: true, 
		touchEnabled: true, 
		slideWidth: 1000,
		slideMargin: 20,
		minSlides: 2,   
		maxSlides: 2,     
	})

	/* public */
	var listint
	$('.public-sub li').click(function(e){
		e.preventDefault();
		listint = $(this).index();

		$('.public-sub li').removeClass('on')
		$(this).addClass('on')

		public(listint);
	})

	function public(num){
		$('.public-cont li').removeClass('on');
		$('.public-cont li').eq(num).addClass('on');
	}

	$('.info-btn').click(function(e){
		e.preventDefault();
		$(this).toggleClass('on');

		if($(this).hasClass('on')==true){
			$(this).find('.btn-txt').text('자막열기')
		}
		else{
			$(this).find('.btn-txt').text('자막닫기')
		}
	})
})