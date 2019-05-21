$(document).ready(function() {
	var texts;

	function init() {
		if(window.location.pathname == '/') {
			showSocialFeed();
		}
	}

	function showSocialFeed() {
		Curator.Templates['post-v2'] = extractTemplateHtml('#curator-feed');

		var widget = new Curator.Widgets.Waterfall({
			container: '#curator-feed',
			feedId: 'd4196ede-5a4b-4aaa-a284-2c32e3cbd6df',
			postsPerPage: 50
		});

		if(isDebug()) {
			widget.on(Curator.Events.FEED_LOADED, function(event, data) {
				log('Curator', data);
			});
		}

		widget.on(Curator.Events.POSTS_RENDERED, function() {
			removePostsWithImageProblems();
			deduplicatePosts();
			removeLinksFromPostTexts();
			cleanUpHtml();
			displaySocialFeed();
		});
	}

	function removePostsWithImageProblems() {
		$('#curator-feed li figure>img').each(function() {
			if(hasImageProblems($(this))) {
				$(this).closest('li').remove();
			}
		});
	}

	function hasImageProblems(img) {
		var hasProblems = false;
		if(img.attr('src') == '') {
			hasProblems = true;
		}
		if(img.get(0).naturalWidth < 300 || img.get(0).naturalHeight < 220) {
			hasProblems = true;
		}
		return hasProblems;
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

	function cleanUpHtml() {
		var list = $('#curator-feed');
		var items = $('#curator-feed li');

		list.html('');
		items.each(function(index, item) {
			list.append(item);
		});
	}

	function displaySocialFeed() {
		if($('#curator-feed li').length > 12) {
			$('#home .social').removeClass('hidden');
		}
	}

	init();
});