// "About" search results page object on ReveDreams.com

var Page = require('./rd-page.js');

var SearchPage = Object.create(Page, {
    titlePrefix: { value: function() { return "You searched for "; }},
    resultTitles: { value: function() { return browser.getText('article h2'); }},
    resultLink: { value: function(url) { return 'article h2 a[href="' + url + '"]'; }}
});


module.exports = SearchPage;