function getQueryStringParams() {
	return new URLSearchParams(window.location.search);
}

function isDebug() {
	return getQueryStringParams().has('debug');
}