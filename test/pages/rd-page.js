// Shared functionality of pages on ReveDreams.com

module.exports = {
    searchInput: function () { return $('input.search-field'); },
    searchSubmit: function () { return $('input.search-submit'); },
    findSearch: function() {
        // search bar is hidden away up top
        browser.click('#masthead .secondary-toggle');
    }
}
