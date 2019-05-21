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

		if(isDebug()) {
			widget.on(Curator.Events.FEED_LOADED, function(event, data) {
				log('Curator', data);
			});
		}

		widget.on(Curator.Events.POSTS_RENDERED, function() {
			removePostsWithoutImages();
			deduplicatePosts();
			removeLinksFromPostTexts();
			cleanUpHtml();
			$('#home .social').removeClass('hidden');
		});
	}

	function removePostsWithoutImages() {
		$('#curator-feed li figure>img').each(function() {
			if($(this).attr('src') == '') {
				$(this).closest('li').remove();
			}
		});
	}

	function deduplicatePosts() {
		texts = new Array();
		$('#curator-feed li .post-text').each(function() {
			if(hasBeenSeenBefore($(this).text())) {
				$(this).closest('li').remove();
			}
		});
	}

	function removeLinksFromPostTexts() {
		$('#curator-feed li .post-text').each(function() {
			var text = $(this).text();
			text = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
			$(this).text(text);
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