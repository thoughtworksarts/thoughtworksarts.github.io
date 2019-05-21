$(document).ready(function() {
	var texts;
	var numPostsRequested = 50;
	var numPostsRequired = 12;
	var countSetupAttempts = 20;
	var maxSetupAttempts = 20;
	var setupAttemptInterval = 250;

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
			postsPerPage: numPostsRequested
		});

		if(isDebug()) {
			widget.on(Curator.Events.FEED_LOADED, function(event, data) {
				log('Curator', data);
			});
		}

		widget.on(Curator.Events.POSTS_RENDERED, function() {
			countSetupAttempts = 0;
			setTimeout(setupSocialFeed, setupAttemptInterval);
		});
	}

	function setupSocialFeed() {
		if(countNumCompleteImages() == numPostsRequested){
			removePostsWithImageProblems();
			deduplicatePosts();
			removeLinksFromPostTexts();
			cleanUpHtml();
			displaySocialFeed();
		} else {
			countSetupAttempts++;
			if(countSetupAttempts < maxSetupAttempts) {
				setTimeout(setupSocialFeed, setupAttemptInterval);
			}
		}
	}

	function countNumCompleteImages() {
		var numComplete = 0;
		$('#curator-feed li figure>img').each(function() {
			if($(this).get(0).complete){
				numComplete++;
			}
		});
		return numComplete;
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
		if($('#curator-feed li').length > numPostsRequired) {
			$('#home .social').removeClass('hidden');
		}
	}

	init();
});