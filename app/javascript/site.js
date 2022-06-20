$(document).ready(function() {
	function init() {
		enableMenuButton();
		enableSocialLinks();
		fixResizableHeights();
		populateSignupBox();
	}

	function enableMenuButton() {
		var menuOverlaid = false;

		$('#menu-button').click(function() {
			if(menuOverlaid){
				$('header>#logonav>nav').removeClass('popout');
				$('body').removeClass('no-scroll');
			} else {
				$('header>#logonav>nav').addClass('popout');
				$('body').addClass('no-scroll');
			}
			menuOverlaid = !menuOverlaid;
		});
	}

	function enableSocialLinks() {
		$('.social.new-window a').click(function(event) {
			var width =  575,
				height = 400,
				left =   ($(window).width()	- width) / 2,
				top	 =   ($(window).height() - height) / 2,
				url	=    this.href,
				opts =   'status=1' +
						 ',width='	+ width	+
						 ',height=' + height +
						 ',top='	+ top +
						 ',left='	+ left;

			window.open(url, 'social-share', opts);
			event.preventDefault();
		});
	}

	function fixResizableHeights() {
		//Fixes problem with viewport height changing on mobile, as the URL bar disappears
		if($(window).width() <= 639) {
			$('body>header').each(function(index, value) {
				$(this).css('height', $(this).height() + 'px');
			});
		}
	}

	function populateSignupBox() {
		$('.subscribe-newsletter').focusin(function(){
			if($(this).val() === 'your email'){
				prepForEmailEntry($(this));
			}
		});

		$('.subscribe-newsletter').focusout(function(){
			if($(this).val() === ''){
				unprepForEmailEntry($(this));
			}
		});
	}

	function prepForEmailEntry(el){
		el.val('');
		el.removeClass('faded');
	}

	function unprepForEmailEntry(el){
		el.val('your email');
		el.addClass('faded');
	}

	init();
});