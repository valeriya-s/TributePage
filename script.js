$(window).scroll(function() {
	var height = $(window).scrollTop();
  if(height > 150) {
		$('#tribute-info').addClass('active');
  } else {
    $('#tribute-info').removeClass('active');
	}
});