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
				$('header.main>nav').removeClass('popout');
			} else {
				$('header.main>nav').addClass('popout');
			}
			menuOverlaid = !menuOverlaid;
		});
	}

	function enableSocialLinks() {
		$('.social a').click(function(event) {
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
			$('.flex-col').each(function(index, value) {
				$(this).css('height', $(this).height() + 'px');
			});
		}
	}

	function populateSignupBox() {
		$('#tlemail').focusin(function(){
			if($(this).val() == 'your@email.com'){
				$(this).val('');
			}
		});

		$('#tlemail').focusout(function(){
			if($(this).val() == ''){
				$(this).val('your@email.com');
			}
		});

		$('form.newsletter').submit(function(e){
			var tlemail = $('#tlemail');
			if(tlemail.val() == 'your@email.com'){
				tlemail.val('');
				e.preventDefault();
				tlemail.val('your@email.com');
			}
		});
	}

	init();
});