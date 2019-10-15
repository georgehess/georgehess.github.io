if (!!location.hash && document.referrer.startsWith(location.protocol + "//" + location.host)) {
	var scrollToElement;
	if (location.hash === "#read-more") {
		scrollToElement = document.querySelector(".story-cite");
	} else if (location.hash.startsWith("#list-")) {
		scrollToElement = document.getElementById(location.hash.slice(6));
	}
	if (scrollToElement) {
		requestAnimationFrame(function() {
			scrollToElement.scrollIntoView({behavior: "smooth"});
		});
	}
}
