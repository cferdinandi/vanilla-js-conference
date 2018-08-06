var expand = function () {

	'use strict';

	/**
	 * Show or hide the element
	 * @param  {Node} elem The element
	 */
	var showHide = function (elem) {
		if (elem.hasAttribute('hidden')) {
			elem.removeAttribute('hidden');
		} else {
			elem.setAttribute('hidden', 'true');
		}
	};

	var putInFocus = function (elem) {
		elem.focus();
		if (document.activeElement.id !== elem.id) {
			elem.setAttribute('tabindex', '-1');
			elem.focus();
		}
	};

	/**
	 * Handle click events
	 */
	var clickHandler = function (event) {

		// Only run on .expand links
		if (!event.target.matches('.expand')) return;

		// Prevent default link behavior
		event.preventDefault();

		// Get the content
		var content = document.querySelector(event.target.hash);
		if (!content) return;

		// Show/hide content
		showHide(content);
		putInFocus(content);

	};

	document.addEventListener('click', clickHandler, false);

};