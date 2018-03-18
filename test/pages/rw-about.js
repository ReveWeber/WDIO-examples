// About page object on rweber.net

var InteriorPage = require('./rw-interior-page.js');

var AboutPage = Object.create(InteriorPage, {
    title: { value: function() { return "About Rebecca - rweber.net"; }},
    pageName: { value: function() { return "About Rebecca"; }},
});


module.exports = AboutPage;