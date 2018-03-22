// Blog page object on rweber.net

var InteriorPage = require('./rw-interior-page.js');

module.exports = {
    title: function() { return "Blog - rweber.net"; },
    open: function() {
        browser.url('http://www.rweber.net/blog/');
    },
};

// add any contents of InteriorPage that haven't been explicitly overwritten

for (var prop in InteriorPage) { 
    (module.exports[prop] = module.exports[prop]) || (module.exports[prop] = InteriorPage[prop]);
}
