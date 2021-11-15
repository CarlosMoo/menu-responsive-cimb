 $(document).ready(function(){

 	$('#removeicon').click(function(){
 		if($('#removeicon').attr('class') == 'fas fa-bars' ){

 			$('#removeicon').removeClass('fas fa-bars').addClass('fas fa-times-circle');
 			$('.navegacion .menu').css({'left':'0px', 'transition': 'all 0.5s'});

 		} else{

			$('#removeicon').removeClass('fas fa-times-circle').addClass('fas fa-bars');
 			$('.navegacion .menu').css({'left':'-414px', 'transition': 'all 0.5s'});
		}
 	});

});
