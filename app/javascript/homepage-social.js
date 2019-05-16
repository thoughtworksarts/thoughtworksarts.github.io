$(document).ready(function() {
	var texts;

	function init() {
		if(window.location.pathname == '/') {
			showSocialFeed();
		}
	}

	function showSocialFeed() {
		var widget = new Curator.Widgets.Waterfall({
			container: '#curator-feed',
			feedId: 'd4196ede-5a4b-4aaa-a284-2c32e3cbd6df',
			postClickAction: 'goto-source',
			postClickReadMoreAction: 'goto-source',
			postsPerPage: 30,
			filter: {
				showNetworks: false,
				showSources: false
			},
			waterfall: {
				gridWidth: 10000,
				animate: false
			}
		});

		widget.on(Curator.Events.POSTS_RENDERED, function() {
			removePostsWithoutImages();
			deduplicatePosts();
			$('#home .social').removeClass('hidden');
		})
	}

	function removePostsWithoutImages() {
		$('#curator-feed .crt-post').each(function() {
			var post = $(this);
			post.find('.crt-image-c>img').each(function() {
				var image = $(this);
				if(image.attr('src') == '') {
					post.remove();
				}
			});
		});
	}

	function deduplicatePosts() {
		texts = new Array();
		$('#curator-feed .crt-post').each(function() {
			var post = $(this);
			post.find('.text').each(function() {
				var text = $(this).text();
				if(hasBeenSeenBefore(text)) {
					post.remove();
				}
			});
		});
	}

	function hasBeenSeenBefore(text) {
		var candidate = trim(text).substr(0, 18);
		if(texts.includes(candidate)) {
			return true;
		} else {
			texts.push(candidate);
			return false;
		}
	}

	function trim(text) {
		return text.replace(/^\s+|\s+$/g, '');
	}

	init();
});