$(function(){
	var a = -1;
	$('#i1').click(function(){
		a++;
		console.log(a);
		$('.img1').eq(a).addClass('img2').siblings().removeClass('img2');
		// $('.img1').eq(a).addClass('img3').removeClass('img3');
	});
})