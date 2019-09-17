$(document).ready(function() {
	var texts;
	var numPostsRequested = 50;
	var numPostsRequired = 12;
	var countSetupAttempts = 20;
	var maxSetupAttempts = 30;
	var setupAttemptInterval = 250;
	var postReorderingHasRunBefore = false;
	var numCols;
	var prevNumCols = -1;

	function init() {
		if(window.location.pathname === '/') {
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
		if(countNumCompleteImages() === numPostsRequested){
			removePostsWithImageProblems();
			processPostTexts();
			deduplicatePosts();
			insertPostsDirectlyIntoListElement();
			displaySocialWall();
			reorderPostsOnColumnCountChange();
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
		if(img.attr('src') === '') {
			hasProblems = true;
		}
		if(img.get(0).naturalWidth < 300 || img.get(0).naturalHeight < 220) {
			hasProblems = true;
		}
		return hasProblems;
	}

	function deduplicatePosts() {
		texts = [];
		$('#curator-feed li .post-text').each(function() {
			if(hasBeenSeenBefore($(this).text())) {
				$(this).closest('li').remove();
			}
		});
	}

	function processPostTexts() {
		$('#curator-feed li .post-text').each(function() {
			var text = $(this).text();
			text = removeLinksFromPostText(text);
			text = generateTeaser(text, 170);
			$(this).text(text);
		});
	}

	function removeLinksFromPostText(text) {
		return text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
	}

	function hasBeenSeenBefore(text) {
		var front = trim(text).slice(0, 18);
		var back = trim(text).slice(-18);
		if(texts.includes(front) || texts.includes(back)) {
			return true;
		} else {
			texts.push(front);
			texts.push(back);
			return false;
		}
	}

	function insertPostsDirectlyIntoListElement() {
		var list = $('#curator-feed');
		var items = $('#curator-feed li');

		list.html('');
		items.each(function(index, item) {
			list.append(item);
		});
	}

	function reorderPostsOnColumnCountChange() {
		numCols = parseInt($('#curator-feed').css('column-count'));
		if(numCols !== prevNumCols) {
			prevNumCols = numCols;
			reorderPosts();

			if(!postReorderingHasRunBefore) {
				$(window).resize(reorderPostsOnColumnCountChange);
				postReorderingHasRunBefore = true;
			}
		}
	}

	function reorderPosts() {
		var listItems = $('#curator-feed li');

		if(postReorderingHasRunBefore) {
			sortByAttribute(listItems, 'original-order');
		} else {
			assignOriginalOrderAttributes(listItems, 'original-order');
		}

		assignReplacementOrderAttributes(listItems, 'replacement-order');
		sortByAttribute(listItems, 'replacement-order');
	}

	function assignOriginalOrderAttributes(listItems, attrName) {
		listItems.each(function(index) {
			$(this).attr('data-' + attrName, index);
		});
	}

	function assignReplacementOrderAttributes(listItems, attrName) {
		var columnStartIndices = getColumnStartIndices();
		var col = 0;
		var row = 0;

		listItems.each(function(index) {
			$(this).attr('data-' + attrName, columnStartIndices[col] + row);

			col++;
			if(col === numCols) {
				col = 0;
				row++;
			}
		});
	}

	function sortByAttribute(listItems, sortBy) {
		listItems.detach().sort(function(a, b) {
			return parseInt($(a).attr('data-' + sortBy)) - parseInt($(b).attr('data-' + sortBy));
		});

		$('#curator-feed').append(listItems);
	}

	function getColumnStartIndices() {
		var columnStartIndices = [];
		var lastColumnPosition = -1;

		$('#curator-feed li').each(function(index) {
			var currentColumnPosition = $(this).position().left;
			if(currentColumnPosition > lastColumnPosition) {
				columnStartIndices.push(index);
				lastColumnPosition = currentColumnPosition;
			}
		});

		return columnStartIndices;
	}

	function displaySocialWall() {
		if($('#curator-feed li').length > numPostsRequired) {
			$('#home .social').removeClass('hidden');
		}
	}

	init();
});