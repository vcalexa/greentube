var home_page = require('../pages/home_page.js');
describe('language functionality', function() {
	browser.ignoreSynchronization = true;
	
	beforeEach(function() {
        browser.get('https://www.gametwist.com/en/');
		browser.driver.manage().window().maximize();
    });
	
	it('should change the language to German' , function(){
		browser.driver.sleep(3000);
	home_page.language().click();
	home_page.selectGerman();
	browser.driver.sleep(3000);
	var currentUrl = browser.getCurrentUrl();
	expect(currentUrl).toEqual('https://www.gametwist.com/de/')
	});
	
	
});