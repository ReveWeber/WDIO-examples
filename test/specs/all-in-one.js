// This test attempts to reach the About page of rweber.net starting from the Blog page.
// It is fully self-contained.

function isAndroid() {
    // various places this has shown up for me in capabilities code
    var bN = browser.desiredCapabilities.browserName,
    pN = browser.desiredCapabilities.platformName,
    justP = browser.desiredCapabilities.platform;
    
    if ((bN && bN.toLowerCase() === "android") || (pN && pN.toLowerCase() === "android") || (justP && justP.toLowerCase() === "android")) {
        return true;
    } else {
        return false;
    }
}

describe('Finding About from Blog via Search', function() {

    it('should open the blog page', function() {
        browser.url('http://www.rweber.net/blog/');
        expect(browser.getTitle()).to.equal("Blog - rweber.net");
    });

    it('should find the search bar', function() {
        if (isAndroid()) {
            browser.execute("mobile: scroll", {direction: 'down'});
        }
        expect(browser.isVisible('input.search-field')).to.be.true;
    });
    
    it('should search for about', function() {
        browser.setValue('input.search-field', 'about');
        browser.click('input.search-submit');
        expect(browser.getTitle()).to.contain('You searched for about');
    });

    it('should see About in the search results', function() {
        var resultTitles = browser.getText('article h2');
        expect(resultTitles).to.contain("About Rebecca");
    });

    it('should reach the About page', function() {
        browser.click('a=About Rebecca');
        expect(browser.getTitle()).to.equal("About Rebecca - rweber.net");
    });

});
