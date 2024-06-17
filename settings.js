function save_setting(e) {
    browser.storage.local.set({[e.target.id]: e.target.checked});
}

function initialize() {
    document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
        checkbox.addEventListener('change', save_setting);
        browser.storage.local.get(checkbox.id).then(result => {
            if (result[checkbox.id] === undefined) {
                // Default
                document.getElementById(checkbox.id).checked = true;
            } else {
                document.getElementById(checkbox.id).checked = result[checkbox.id];
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initialize);
