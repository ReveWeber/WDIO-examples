// "About" search results page object on rweber.net

var InteriorPage = require('./rw-interior-page.js');

var SearchPage = Object.create(InteriorPage, {
    titlePrefix: { value: function() { return "You searched for "; }},
    resultTitles: { value: function() { return browser.getText('article h2'); }}
});


module.exports = SearchPage;