$(function(){
	skAction.init()
})
var skAction = {
	init : function(){
		this.langAction();
		this.gnbAction();
		this.pressSlide();
		this.publicList();
	},

	langAction : function(){
		$('.lang').click(function(e){
			e.preventDefault();
			$('.lang-wrap').toggleClass('on');
		})
	},

	gnbAction : function(){
		$('.lines').click(function(e){
			e.preventDefault();
			$('.gnb-wrap').addClass('on');
			$('.header').css('display', 'none')
		})
		
		$('.close-btn').click(function(e){
			e.preventDefault();
			$('.header').css('display', 'block')
			$('.gnb-wrap').removeClass('on');
		})

		$('.sub-title').click(function(e){
			e.preventDefault();
			if(!$(this).hasClass('on')){
				$('.sub-title').removeClass('on')
				$(this).addClass('on')
				$('.sub-title').next().slideUp();		
				$(this).next().slideDown();
			}
		})

		$('.gnb-wrap').click(function(e){
			if(e.target.className == 'gnb-wrap on'){
				$('.header').css('display', 'block')
				$('.gnb-wrap').removeClass('on');
			}
		})
	},

	pressSlide : function(){
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
	},

	publicList : function(){
		function public(num){
			$('.public-cont li').removeClass('on');
			$('.public-cont li').eq(num).addClass('on');
		}

		$('.public-sub li').click(function(e){
			var listint = $(this).index();
			e.preventDefault();
		
			$('.public-sub li').removeClass('on')
			$(this).addClass('on')
		
			public(listint);
		})
		
		$('.info-btn').click(function(e){
			e.preventDefault();
			$(this).toggleClass('on');
		
			if($(this).hasClass('on')){
				$(this).find('.btn-txt').text('자막열기')
			}
			else{
				$(this).find('.btn-txt').text('자막닫기')
			}
		})
	}
}


