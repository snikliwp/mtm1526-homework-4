// JavaScript Document
$(document).ready(function() {
	
	$('.slides img:not(:first-child)').hide();
	
	$("#next").on("click", function() {
		var current = $(".slides .current").index();
		var next = current + 1;
		
		if (next >= $(".slides img").length) {
			next = 0;
		} // end of if
		$('.slides .current').fadeOut(500,function() {
			$('.slides img')// $('.slides img') creates a list of all the images in the specified classes
			.eq(next)	// eq is the index pointer (next is the value of the pointer of all the slides
			.fadeIn(500)
			.addClass('current'); 
			
			$(this).removeClass("current");
		}); // end function fadeout
	}); // end of next click function
	
	
	$("#prev").on("click", function() {
		var current = $(".slides .current").index();
		var next = current - 1;
/*		if (next >= $(".slides img").length) {
			next = 0;
		} // end of if
*/		$('.slides .current').fadeOut(500,function() {
			$('.slides img')// $('.slides img') creates a list of all the images in the specified classes
			.eq(next)	// eq is the index pointer (next is the value of the pointer of all the slides
			.fadeIn(500)
			.addClass('current'); 
			
			$(this).removeClass("current");
		}); // end function fadeout
	}); // end of prev click function
	
	
	
	/* 
	tabs - position absolute again zindex
	buttons or a element
	easiest way is put a click handler on each tab
	one click handler use an a element <a href = '#tab-id
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}); // end of document ready function