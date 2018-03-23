# WebdriverIO Example Files

Sample config files and tests for using WebdriverIO with Mocha and Chai, either through selenium-standalone (local-wdio.conf.js) or connecting to Browserstack (browserstack-wdio.conf.js) or Sauce Labs (sauce-wdio.conf.js).

`/setup/` includes a simple test to check your installation and setup.

`/test/specs/` contains all other tests, with other subfolders of `/test/` holding shared code.

* `all-in-one.js` and `all-in-one-extended.js` are self-contained tests (other than needing `helpers/identifiers.js`), with both test logic and page interaction logic included.
* `pom-rd.js` and `pom-rw.js` use the Page Object Model with the pages in `pages`.
* `wdio-rw.js` uses the Page Object Model with the pages in `pages-2`.

For more information, see [Getting set up with WebdriverIO](http://www.rweber.net/developer-toolbox/getting-set-webdriverio/) and more generally [the code testing tag on my blog](http://www.rweber.net/tag/code-testing/).
