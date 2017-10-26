$(function(){
	var a = -1;
	$('#i1').click(function(){
		a++;
		console.log(a);
		$('.img1').eq(a).css('opacity','1');
		
	});

	$('.nav-search1 ul li').click(function(){
		for(var i = 0;i < 4;i++){
			var a = $(this).index();
			$('.nav-search2 form').eq(a).css('display','block').siblings().css('display','none');
		}
	})
	
	$('form input').on('focus',function(){
		$('dl').css('display','block');
	// 	// alert(1);
	})
	$('form input').on('blur',function(){
		$('dl').css('display','none');
	})
})