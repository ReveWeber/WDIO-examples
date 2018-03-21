// About page object on ReveDreams.com

var Page = require('./rd-page.js');

var AboutPage = Object.create(Page, {
    url: { value: function() { return "http://www.revedreams.com/about/"; }},
    title: { value: function() { return "About & Contact - ReveDreams.com"; }},
    pageName: { value: function() { return "About & Contact"; }},
});


module.exports = AboutPage;