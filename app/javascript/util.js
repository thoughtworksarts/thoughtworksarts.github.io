function getQueryStringParams() {
	return new URLSearchParams(window.location.search);
}

function isDebug() {
	return getQueryStringParams().has('debug');
}

function log(label, contents) {
	if(isDebug()) {
		console.log(label + ':');
		console.log(contents);
	}
}

function trim(text) {
	return text.replace(/^\s+|\s+$/g, '');
}

function generateTeaser(str, maxLength) {
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

function safeRead(str){
	if(str == 'undefined' || str == '' || str == null) {
		return invalidValueStr;
	} else {
		return trim(str);
	}
}

function extractTemplateHtml(selector) {
	var template = $(selector).html();
	$(selector).html('');
	template = template.replace(/\<\!\-\-/g, '');
	template = template.replace(/\-\-\>/g, '');
	return template;
}

function formatDate(dateStr, timeStr) {
	var date = toDateObject(dateStr, timeStr);
	return date.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });
}

function toDateObject(dateStr, timeStr) {
	return new Date(dateStr + 'T' + timeStr);
}