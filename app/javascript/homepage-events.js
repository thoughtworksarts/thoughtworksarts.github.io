$(document).ready(function() {
	var invalidValueStr = 'INVALID_VALUE';
	var listElement;
	var listItemTemplateHtml;

	function init() {
		if(window.location.pathname == '/') {
			populateEvents();
		}
	}

	function populateEvents() {
		populateListItemTemplateHtml();
		$.ajax({
			url: "https://api.meetup.com/volumetric/events?sign=true&photo-host=secure&desc=true&status=past,upcoming",
			jsonp: "callback",
			dataType: "jsonp",
			data: { format: "json" },
			success: function(meetupJson) {
				if(isDebug()) {
					console.log('Meetup:');
					console.log(meetupJson);
				}
				var eventsElement = $('#home .events');
				bindEventsHtml(meetupJson);
				eventsElement.removeClass('hidden');
			},
			error: function(errorJson) {
				bindErrorHtml(errorJson);
			}
		});
	}

	function populateListItemTemplateHtml() {
		listElement = $('#home .events ul');
		listItemTemplateHtml = listElement.html();
	}

	function isAcceptableMeetup(meetup) {
		var name = safeRead(meetup.name);
		var eventDate = toDateObject(meetup.local_date, meetup.local_time);
		var today = new Date();
		var oneWeekFwd = new Date();
		oneWeekFwd.setDate(oneWeekFwd.getDate() + 7);

		var isAnythingOtherThanHackLab = name != 'Hardware Hack Lab';
		var isNextUpcomingHackLab = name == 'Hardware Hack Lab' && eventDate > today && eventDate < oneWeekFwd;

		return isAnythingOtherThanHackLab || isNextUpcomingHackLab;
	}

	function bindErrorHtml(errorJson) {
		listElement.replaceWith('<!--' + JSON.stringify(errorJson) + '-->');
	}

	function bindEventsHtml(meetupJson) {
		listElement.html('');

		for(let meetup of meetupJson.data) {
			if(isAcceptableMeetup(meetup)) {
				bindEventHtml(meetup);
			}

			if(listElement.children().length == 3) {
				break;
			}
		}
	}

	function bindEventHtml(meetup) {
		var newListItem = listItemTemplateHtml;

		newListItem = newListItem.replace(/Event Name/g,        safeRead(meetup.name));
		newListItem = newListItem.replace(/Event Image/g,       extractImage(meetup.description));
		newListItem = newListItem.replace(/Event Date/g,        formatDate(meetup.local_date, meetup.local_time));
		newListItem = newListItem.replace(/Event Location/g,    safeRead(meetup.venue.name));
		newListItem = newListItem.replace(/Event City/g,        safeRead(meetup.venue.city));
		newListItem = newListItem.replace(/Event Description/g, generateTeaser(meetup.description, 300));
		newListItem = newListItem.replace(/event-url/g,         safeRead(meetup.link));

		if(newListItem.indexOf(invalidValueStr) < 0) {
			listElement.append(newListItem);
		}
	}

	function safeRead(str){
		if(str == 'undefined' || str == '' || str == null) {
			return invalidValueStr;
		} else {
			return str;
		}
	}

	function formatDate(dateStr, timeStr) {
		var date = toDateObject(dateStr, timeStr);
		return date.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });
	}

	function toDateObject(dateStr, timeStr) {
		return new Date(dateStr + 'T' + timeStr);
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

	function extractImage(str) {
		var regex = /<img.*?src=['"](.*?)['"]/;
		var matches = regex.exec(str);
		if(matches == null || matches.length < 2) {
			return 'NOT FOUND';
		} else {
			return matches[1];
		}
	}

	init();
});