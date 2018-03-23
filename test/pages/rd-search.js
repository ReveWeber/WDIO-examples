// Search results page object on ReveDreams.com

var Page = require('./rd-page.js');

module.exports = {
    titlePrefix: function() { return "You searched for "; },
    resultTitles: function() { return browser.getText('article h2'); },
    resultLink: function(url) { return 'article h2 a[href="' + url + '"]'; }
};

// add any contents of Page that haven't been explicitly overwritten

for (var prop in Page) { 
    (module.exports[prop] = module.exports[prop]) || (module.exports[prop] = Page[prop]);
}
