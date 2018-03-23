// Page objects done per WDIO documentation

// "About" search results page object on rweber.net

var InteriorPage = require('./rw-interior-page.js');

var SearchPage = Object.create(InteriorPage, {
    titlePrefix: { value: function() { return "You searched for "; }},
    resultTitles: { value: function() { return browser.getText('article h2'); }},
    resultLink: { value: function(url) { return 'article h2 a[href="' + url + '"]'; }}
});


module.exports = SearchPage;