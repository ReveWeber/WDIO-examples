// Shared functionality of non-front pages on rweber.net

const IDs = require('../helpers/identifiers.js');

module.exports = {
    searchInput: function () { return $('input.search-field'); },
    searchSubmit: function () { return $('input.search-submit'); },
    findSearch: function() {
        // search bar is at the foot of the page
        // this may be a placebo, but it has seemed to help
        if (IDs.isAndroid()) {
            browser.execute("mobile: scroll", {direction: 'down'});
        }
    }
};
