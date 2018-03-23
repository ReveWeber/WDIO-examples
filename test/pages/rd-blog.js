// Blog page object on ReveDreams.com

var Page = require('./rd-page.js');

module.exports = {
    title: function() { return "ReveDreams.com - teaching, design, and exploration"; },
    open: function() {
        browser.url('http://www.revedreams.com/');
    },
};

// add any contents of Page that haven't been explicitly overwritten

for (var prop in Page) { 
    (module.exports[prop] = module.exports[prop]) || (module.exports[prop] = Page[prop]);
}
