if (!!location.hash && document.referrer.startsWith(location.protocol + "//" + location.host)) {
	if (location.hash === "#read-more") {
		document.querySelector(".story-cite").scrollIntoView({behavior: "smooth"});
	} else if (location.hash.startsWith("#list-")) {
		document.getElementById(location.hash.slice(6)).scrollIntoView({behavior: "smooth"});
	}
}
