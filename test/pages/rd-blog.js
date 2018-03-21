// Blog page object on ReveDreams.com

var Page = require('./rd-page.js');

var BlogPage = Object.create(Page, {
    title: { value: function() { return "ReveDreams.com - teaching, design, and exploration"; }},
    open: {value: function() {
        browser.url('http://www.revedreams.com/');
    }},
});


module.exports = BlogPage;