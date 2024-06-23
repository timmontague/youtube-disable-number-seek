/*
 * YouTube keyboard shortcuts:
 * https://support.google.com/youtube/answer/7631406?hl=en
 *
 * Here's a javascript keyboard event library that is helpful to look at:
 * https://github.com/ccampbell/mousetrap/blob/master/mousetrap.js
 */

const settings = {
    disable_top_row_keys: true,
    disable_numpad_keys: true,
    disable_0: true,
    disable_home: true,
    disable_end: true,
};

const keys = Object.keys(settings);

browser.storage.local.get(keys).then(result => {
    for (const key of keys) {
        if (result[key] !== undefined) {
            settings[key] = result[key];
        } else {
            browser.storage.local.set({[key]: true});
        }
    }
});

function keyboard_event_handler(e) {
    // Don't prevent entering numbers, Home/End in input areas
    if (e.target.tagName == 'INPUT' ||
        e.target.tagName == 'SELECT' ||
        e.target.tagName == 'TEXTAREA' ||
        e.target.isContentEditable) {
        return;
    }

    // Trap number keys and Home/End keys
    if ((settings.disable_top_row_keys && e.code >= 'Digit1' && e.code <= 'Digit9') || 
        (settings.disable_numpad_keys && e.code >= 'Numpad1' && e.code <= 'Numpad9') ||
        (settings.disable_0 && e.code === 'Digit0') ||
        (settings.disable_0 && e.code === 'Numpad0') ||
        (settings.disable_home && e.code === 'Home') || 
        (settings.disable_end && e.code === 'End')) {
        e.stopImmediatePropagation();
    }
}
window.addEventListener('keydown', keyboard_event_handler, true);
