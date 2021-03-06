// This test attempts to reach the About page of rweber.net starting from the Blog page.

// It uses the Page Object Model to separate test logic from page interaction logic.
// See all-in-one-extended.js for some explanatory comments about the non-POM aspects.

const IDs = require('../helpers/identifiers.js');
const Blog = require('../pages/rw-blog.js');
const Search = require('../pages/rw-search.js');
const About = require('../pages/rw-about.js');


IDs.mkdir('./pom-rw-screenshots');
IDs.mkdir('./pom-rw-screenshots/' + IDs.folder());
var imgPrefix = './pom-rw-screenshots/' + IDs.folder() + '/' + IDs.identifier() + '-';

// from here down this is identical to pom-rd.js

describe('Finding About from Blog via Search', function() {

    describe('Opening blog page:', function() {
        it('should open the blog page', function() {
            Blog.open();
            browser.saveScreenshot(imgPrefix + "1-blog.png");
            expect(browser.getTitle()).to.equal(Blog.title());
        });
    });

    describe('Searching for About:', function() {
        it('should find the search bar', function() {
            Blog.findSearch();
            expect(Blog.searchInput().isVisible()).to.be.true;
        });
        it('should search for about', function() {
            Blog.searchInput().setValue('about');
            Blog.searchSubmit().click();
            browser.saveScreenshot(imgPrefix + "2-results.png");
            expect(browser.getTitle()).to.contain(Search.titlePrefix() + 'about');
        });
    });

    describe('Getting to About:', function() {
        it('should see About in the search results', function() {
            expect(Search.resultTitles()).to.contain(About.pageName());
        });
        it('should reach the About page', function() {
            browser.click(Search.resultLink(About.url()));
            browser.saveScreenshot(imgPrefix + "3-about.png");
            expect(browser.getTitle()).to.equal(About.title());
        });
    });

});