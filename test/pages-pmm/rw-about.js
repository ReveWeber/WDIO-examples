// About page object on rweber.net

var InteriorPage = require('./rw-interior-page.js');

module.exports = {
    url: function() { return "http://www.rweber.net/about/"; },
    title: function() { return "About Rebecca - rweber.net"; },
    pageName: function() { return "About Rebecca"; },
};

// add any contents of InteriorPage that haven't been explicitly overwritten

for (var prop in InteriorPage) { 
    (module.exports[prop] = module.exports[prop]) || (module.exports[prop] = InteriorPage[prop]);
}
