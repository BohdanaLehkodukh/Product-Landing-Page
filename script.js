jQuery(document).ready(function ($) {
  function scrollHeader() {
		if ($(window).scrollTop() > $('#header').height()) 
			$('#header').addClass('stick')
    else 
			$("#header").removeClass('stick')
	}

	scrollHeader()

	$(document).on("scroll", window, () => scrollHeader())
})