// Tweaks
if (window.location.host == "wave.google.com") {
	for (i = 0; i < document.styleSheets.length; ++i) {
		css = document.styleSheets[i];
		if (css.rules.length &&
		 	".light_themes_scrollbars" == css.rules[0].selectorText) {
			css.disabled = true;
		}
	}
}
