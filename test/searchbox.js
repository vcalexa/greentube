var home_page = require('../pages/home_page.js');
describe('searchbox functionality test', function() {
	browser.ignoreSynchronization = true;
	
	beforeEach(function() {
		console.log("********TEST STARTED*********");
        browser.get('https://www.gametwist.com/en/');
		browser.driver.manage().window().maximize();
    });
	
	
	it('should find and click on the 3rd result' , function(){
		
	home_page.enterUserName('vladgreentube');
	home_page.enterPassword('1qaz2wsx');
	home_page.click_login_button();
		browser.driver.sleep(5000);
	home_page.searchGame('slots');
	home_page.results(7).click();
	browser.driver.sleep(5000);
	});
	
	
	
	
});