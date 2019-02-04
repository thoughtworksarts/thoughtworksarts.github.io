$(document).ready(function() {
	function init() {
		if(window.location.pathname == '/') {
			populateEvents();
		}
	}

	function populateEvents() {
		$.ajax({
			url: "https://api.meetup.com/volumetric/events?only=name,local_date,local_time,description,link,venue&page=2",
			jsonp: "callback",
			dataType: "jsonp",
			data: { format: "json" },
			success: function(meetupJson) {
				var eventsElement = $('.listing.events');
				bindEventsHtml(meetupJson);
				eventsElement.removeClass('hidden');
			}
		});
	}

	function bindEventsHtml(meetupJson) {
		var listElement = $('.listing.events ul');
		var listItemTemplateHtml = listElement.html();
		listElement.html('');

		meetupJson.data.forEach(function(meetup) {
			var newListItem = listItemTemplateHtml;
			newListItem = newListItem.replace(/Event Name/g, meetup.name);
			newListItem = newListItem.replace(/Event Date/g, meetup.local_date);
			newListItem = newListItem.replace(/Event Time/g, meetup.local_time);
			newListItem = newListItem.replace(/Event Location/g, meetup.venue.name);
			newListItem = newListItem.replace(/Event City/g, meetup.venue.city);
			newListItem = newListItem.replace(/Event Description/g, generateTeaser(meetup.description, 80));
			newListItem = newListItem.replace(/event-url/g, meetup.link);

			listElement.append(newListItem);
		});
	}

	function generateTeaser(html, maxLength) {
		var str = $(html).text();

		if(str.length > maxLength) {
			var str = str.substr(0, maxLength);
			str = str.substr(0, Math.min(str.length, str.lastIndexOf(" ")));
		}

		while(!str[str.length -1].match(/[a-zA-Z0-9]/)) {
			str = str.slice(0, -1);
			console.log(str + "\n");
		}

		return str;
	}

	init();
});