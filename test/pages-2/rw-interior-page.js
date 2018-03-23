// Page objects done per WDIO documentation

// Shared functionality of non-front pages on rweber.net

// This is the "base page".
// It is done as constructor/prototype because inheritance doesn't happen otherwise.

const IDs = require('../helpers/identifiers.js');

function InteriorPage() {}

InteriorPage.prototype.searchInput = function () { return $('input.search-field'); }
InteriorPage.prototype.searchSubmit = function () { return $('input.search-submit'); }

InteriorPage.prototype.findSearch = function() {
    // search bar is at the foot of the page
    // this may be a placebo, but it has seemed to help
    if (IDs.isAndroid()) {
        browser.execute("mobile: scroll", {direction: 'down'});
    }
}

module.exports = new InteriorPage();