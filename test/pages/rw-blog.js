// Blog page object on rweber.net

var InteriorPage = require('./rw-interior-page.js');

var BlogPage = Object.create(InteriorPage, {
    title: { value: function() { return "Blog - rweber.net"; }},
    open: {value: function() {
        browser.url('http://www.rweber.net/blog/');
    }},
});


module.exports = BlogPage;