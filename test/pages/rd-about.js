// About page object on ReveDreams.com

var Page = require('./rd-page.js');

module.exports = {
    url: function() { return "http://www.revedreams.com/about/"; },
    title: function() { return "About & Contact - ReveDreams.com"; },
    pageName: function() { return "About & Contact"; },
};

// add any contents of Page that haven't been explicitly overwritten

for (var prop in Page) { 
    (module.exports[prop] = module.exports[prop]) || (module.exports[prop] = Page[prop]);
}
