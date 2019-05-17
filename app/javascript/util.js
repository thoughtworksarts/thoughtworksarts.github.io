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