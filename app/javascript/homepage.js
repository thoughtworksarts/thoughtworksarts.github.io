$(document).ready(function() {
	var invalidValueStr = 'INVALID_VALUE';

	function init() {
		if(window.location.pathname == '/') {
			populateEvents();
		}
	}

	function populateEvents() {
		$.ajax({
			url: "https://api.meetup.com/volumetric/events?only=name,local_date,local_time,description,link,venue&page=3",
			jsonp: "callback",
			dataType: "jsonp",
			data: { format: "json" },
			success: function(meetupJson) {
				var eventsElement = $('#home .events');
				bindEventsHtml(meetupJson);
				eventsElement.removeClass('hidden');
			},
			error: function(errorJson) {
				bindErrorHtml(errorJson);
			}
		});
	}

	function bindErrorHtml(errorJson) {
		var listElement = $('#home .events ul');
		listElement.replaceWith('<!--' + JSON.stringify(errorJson) + '-->');
	}

	function bindEventsHtml(meetupJson) {
		var listElement = $('#home .events ul');
		var listItemTemplateHtml = listElement.html();
		listElement.html('');

		meetupJson.data.forEach(function(meetup) {
			var newListItem = listItemTemplateHtml;
			newListItem = newListItem.replace(/Event Name/g,        safeRead(meetup.name));
			newListItem = newListItem.replace(/Event Date/g,        safeRead(formatDate(meetup.local_date, meetup.local_time)));
			newListItem = newListItem.replace(/Event Location/g,    safeRead(meetup.venue.name));
			newListItem = newListItem.replace(/Event City/g,        safeRead(meetup.venue.city));
			newListItem = newListItem.replace(/Event Description/g, safeRead(generateTeaser(meetup.description, 80)));
			newListItem = newListItem.replace(/event-url/g,         safeRead(meetup.link));

			if(newListItem.indexOf(invalidValueStr) >= 0) {
				return;
			}

			listElement.append(newListItem);
		});
	}

	function safeRead(str){
		if(str == 'undefined' || str == '' || str == null) {
			return invalidValueStr;
		} else {
			return str;
		}
	}

	function formatDate(dateStr, timeStr) {
		var date = new Date(dateStr + 'T' + timeStr);
		return date.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
	}

	function generateTeaser(html, maxLength) {
		var str = $(html).text();

		if(str.length > maxLength) {
			var str = str.substr(0, maxLength);
			str = str.substr(0, Math.min(str.length, str.lastIndexOf(" ")));

			while(!str[str.length -1].match(/[a-zA-Z0-9]/)) {
				str = str.slice(0, -1);
			}

			str += '...';
		}

		return str;
	}

	init();
});