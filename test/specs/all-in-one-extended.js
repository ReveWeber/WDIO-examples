// This test attempts to reach the About page of rweber.net starting from the Blog page.

// It is a version of all-in-one.js extended to use test/helpers/identifiers.js
// and to take screenshots, set a custom error message (first test), and have more internal organization

const IDs = require('../helpers/identifiers.js');

IDs.mkdir('./all-in-one-screenshots');
IDs.mkdir('./all-in-one-screenshots/' + IDs.folder());
var imgPrefix = './all-in-one-screenshots/' + IDs.folder() + '/' + IDs.identifier() + '-';

// An overall wrapper helps with test identification when hooking into a testing service
describe('Finding About from Blog via Search', function() {

    // colon also for clarity, on "describes" that immediately wrap "its"
    describe('Opening blog page:', function() {
        it('should open the blog page', function() {
            browser.url('http://www.rweber.net/blog/');
            browser.saveScreenshot(imgPrefix + "1-blog.png");
            // custom error messages can be informative (though this one is superfluous)
            // but you can only pass a string to expect, not something that still needs evaluation
            var actualTitle = "Actual title: " + browser.getTitle();
            expect(browser.getTitle(), actualTitle).to.equal("Blog - rweber.net");
        });
    });

    describe('Searching for About:', function() {
        it('should find the search bar', function() {
            // search bar is at the foot of the page
            // this may be a placebo, but it has seemed to help
            if (IDs.isAndroid()) {
                browser.execute("mobile: scroll", {direction: 'down'});
            }
            expect(browser.isVisible('input.search-field')).to.be.true;
        });
        it('should search for about', function() {
            browser.setValue('input.search-field', 'about');
            browser.click('input.search-submit');
            // used the following in debugging, to make sure it wasn't just that search results were taking too long
            // browser.pause(5000);
            browser.saveScreenshot(imgPrefix + "2-results.png");
            expect(browser.getTitle()).to.contain('You searched for about');
        });
    });

    describe('Getting to About:', function() {
        it('should see About in the search results', function() {
            var resultTitles = browser.getText('article h2');
            expect(resultTitles).to.contain("About Rebecca");
        });
        it('should reach the About page', function() {
            browser.click('a=About Rebecca');
            browser.saveScreenshot(imgPrefix + "3-about.png");
            expect(browser.getTitle()).to.equal("About Rebecca - rweber.net");
        });
    });

});