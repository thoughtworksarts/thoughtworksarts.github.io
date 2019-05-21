$(document).ready(function() {
	var invalidValueStr = 'INVALID_VALUE';
	var listElement;
	var listItemTemplateHtml;

	function init() {
		if(window.location.pathname == '/') {
			listElement = $('#meetup-feed');
			populateEvents();
		}
	}

	function populateEvents() {
		listItemTemplateHtml = extractTemplateHtml('#meetup-feed');

		$.ajax({
			url: "https://api.meetup.com/volumetric/events?sign=true&photo-host=secure&desc=true&status=past,upcoming&fields=featured_photo",
			jsonp: "callback",
			dataType: "jsonp",
			data: { format: "json" },
			success: function(json) {
				log('Meetup Events', json);
				bindEventsHtml(json);
				$('#home .events').removeClass('hidden');
			},
			error: function(errorJson) {
				bindErrorHtml(errorJson);
			}
		});
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
		newListItem = newListItem.replace(/Event Image/g,       extractImage(meetup));
		newListItem = newListItem.replace(/Event Date/g,        formatDate(meetup.local_date, meetup.local_time));
		newListItem = newListItem.replace(/Event Description/g, generateTeaser(meetup.description, 300));
		newListItem = newListItem.replace(/Event Link/g,        safeRead(meetup.link));

		if(newListItem.indexOf(invalidValueStr) < 0) {
			listElement.append(newListItem);
		}
	}

	function extractImage(meetup) {
		if(isHardwareHackLab(meetup)) {
			return '/images/events/hardware-hack-lab.jpg';
		}
		if(hasFeaturedPhoto(meetup)) {
			return meetup.featured_photo.photo_link;
		}
		return '/images/events/generic-event.jpg';
	}

	function isHardwareHackLab(meetup) {
		return safeRead(meetup.name) == 'Hardware Hack Lab';
	}

	function hasFeaturedPhoto(meetup) {
		return meetup.featured_photo != null &&
		       meetup.featured_photo.photo_link != null &&
		       meetup.featured_photo.photo_link.length > 5;
	}

	init();
});