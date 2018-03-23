// Search results page object on rweber.net

var InteriorPage = require('./rw-interior-page.js');

module.exports = {
    titlePrefix: function() { return "You searched for "; },
    resultTitles: function() { return browser.getText('article h2'); },
    resultLink: function(url) { return 'article h2 a[href="' + url + '"]'; }
};

// add any contents of InteriorPage that haven't been explicitly overwritten

for (var prop in InteriorPage) { 
    (module.exports[prop] = module.exports[prop]) || (module.exports[prop] = InteriorPage[prop]);
}
