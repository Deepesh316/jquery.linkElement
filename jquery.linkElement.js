/*
* Name: linkElement
* Author: Deepesh Kumar R
* Version: 0.1.0
* License: MIT
*/

(function($) {
	$.fn.linkElement = function(options) {
		// Default Settings
		var settings = $.extend({
			href: null,
			text: null,
			target: '_self'
		}, options);

		// Validate
		if(settings.href == null) {
			alert("Sorry you need href option for linkElement to work");
			return this;
		}

		// Check for all texts
		return this.each(function() {
			var object = $(this); // Each Text Object that the plugin is attached
			if(settings.text == null) {
				settings.text = object.text();
			}

			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
		});
	}
}(jQuery));