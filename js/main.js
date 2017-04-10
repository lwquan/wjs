$(function()
{	
	function fun(){
		var sum = 30;

		var windowWidth = $(window).width();
		var bool = windowWidth < 640
		$('#main-ad > .carousel-inner > .item').each(function(index,ele){
			
			var boolchange = bool ? 'img-litter' : 'img-big';
			
			if (bool) {
				$(ele).html('<img src="' + $(ele).data(boolchange) + '" alt="" />');
				
			} else {
				// console.log('obj');
				$(ele).empty();
				$(ele).css('backgroundImage','url("'+$(ele).data(boolchange)+'")');
			}
			
		});
		$('.nav-tabs li').each(function(index,ele){
			sum+=$(ele).width();
		// console.log(sum);

	});
		if(sum > windowWidth)
		{	
			$('.nav-tabs')
			.css('width',sum)
			.parent().css('overflow-x','scroll');
		}else {
			$('.nav-tabs')
			.parent().css('overflow-x','');
		}
	};
	fun();
	$(window).on('resize',fun);
	$('[data-toggle="tooltip"]').tooltip();

	$news_title = $('.news-title>h4') ;
	$('#news .nav-pills a').on('click',function()
	{
		var text = $(this).data('title');
		console.log(text);
		$news_title.text(text);
	});
	//手指点击的位置和手指离开的位置
	var mouse_start,mouse_end;
	var offset = 50;
	//点击事件
	$('.carousel').on('touchstart',function(e)
	{
		mouse_starte = parseInt(e.originalEvent.touches[0].clientX);

	});
	//点击过后的滑动事件
	$('.carousel').on('touchmove',function(e)
	{
		mouse_end = parseInt(e.originalEvent.touches[0].clientX);
	});
	//手指离开事件
	$('.carousel').on('touchend',function(e)
	{	

		var num_value = Math.abs(mouse_end-mouse_starte);
		if(num_value > offset)
		{	
			
			var str = mouse_end>mouse_starte?'prev':'next';
			
			$(this).carousel(str);
		}
	});
});