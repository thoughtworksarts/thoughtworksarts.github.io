$(document).ready(function() {
	var texts;

	function init() {
		if(window.location.pathname == '/') {
			showSocialFeed();
		}
	}

	function showSocialFeed() {
		Curator.Templates['post-v2'] = getSocialItemTemplate();

		var widget = new Curator.Widgets.Waterfall({
			container: '#curator-feed',
			feedId: 'd4196ede-5a4b-4aaa-a284-2c32e3cbd6df',
			postsPerPage: 30
		});

		widget.on(Curator.Events.POSTS_RENDERED, function() {
			removePostsWithoutImages();
			deduplicatePosts();
			cleanUpHtml();
			$('#home .social').removeClass('hidden');
		})
	}

	function removePostsWithoutImages() {
		$('#curator-feed li').each(function() {
			var post = $(this);
			post.find('figure>img').each(function() {
				var image = $(this);
				if(image.attr('src') == '') {
					post.remove();
				}
			});
		});
	}

	function deduplicatePosts() {
		texts = new Array();
		$('#curator-feed li').each(function() {
			var post = $(this);
			post.find('.post-text').each(function() {
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

	function getSocialItemTemplate() {
		var template = $('#curator-feed').html();
		$('#curator-feed').html('');
		template = template.replace(/\<\!\-\-/g, '');
		template = template.replace(/\-\-\>/g, '');
		return template;
	}

	function cleanUpHtml() {
		var list = $('#curator-feed');
		var items = $('#curator-feed li');

		list.html('');
		items.each(function(index, item) {
			list.append(item);
		});
	}

	init();
});