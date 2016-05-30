$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1200) {
			$('#clickToTopKoba').fadeIn();
			$('#clickToTopSeil').fadeIn();
		} else {
			$('#clickToTopKoba').fadeOut();
			$('#clickToTopSeil').fadeOut(50);
		}
	});
	
	//Click event to scroll to top
	$('#clickToTopKoba').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});