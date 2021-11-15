 $(document).ready(function(){

 	// MOSTRANDO Y OCULTANDO MENU
 	$('#removeicon').click(function(){
 		if($('#removeicon').attr('class') == 'fas fa-bars' ){

 			$('#removeicon').removeClass('fas fa-bars').addClass('fas fa-times-circle'); // Agregamos el icono X
 			$('.navegacion .menu').css({'left':'0px', 'transition': 'all 0.5s'}); // Mostramos el menu

 		} else{

			$('#removeicon').removeClass('fas fa-times-circle').addClass('fas fa-bars'); // Agregamos el icono del Menu
 			$('.navegacion .menu').css({'left':'-414px', 'transition': 'all 0.5s'}); // Ocultamos el Menu

		}
 	});

});
