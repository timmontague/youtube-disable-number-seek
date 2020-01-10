/*
 * YouTube keyboard shortcuts:
 * https://support.google.com/youtube/answer/7631406?hl=en
 *
 * Here's a javascript keyboard event library that is helpful to look at:
 * https://github.com/ccampbell/mousetrap/blob/master/mousetrap.js
 */

function keyboard_event_handler(e) {
    // Don't prevent entering numbers in input areas
    if (e.target.tagName == 'INPUT' ||
	e.target.tagName == 'SELECT' ||
	e.target.tagName == 'TEXTAREA' ||
	e.target.isContentEditable) {
	return;
    }
    // Trap number keys
    if (e.key >= '0' && e.key <= '9') {
	e.stopImmediatePropagation();
    }
}
window.addEventListener('keydown', keyboard_event_handler, true);
