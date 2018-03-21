// Shared functionality of pages on ReveDreams.com

// This is the "base page".
// It is done as constructor/prototype because inheritance doesn't happen otherwise.

function Page() {}

Page.prototype.searchInput = function () { return $('input.search-field'); }
Page.prototype.searchSubmit = function () { return $('input.search-submit'); }

Page.prototype.findSearch = function() {
    // search bar is hidden away up top
    browser.click('#masthead .secondary-toggle');
}

module.exports = new Page();