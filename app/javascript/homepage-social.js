$(document).ready(function() {
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
			postsPerPage: 26,
			filter: {
				showNetworks: false,
				showSources: false
			},
			waterfall: {
				gridWidth: 10000,
				animate: false
			}
		});

		widget.on(Curator.Events.POSTS_LOADED, function() {
			$('#home .social').removeClass('hidden');
		})
	}

	init();
});