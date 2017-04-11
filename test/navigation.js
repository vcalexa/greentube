var login_page = require('../pages/login_page.js');
describe('greentube tests2', function() {
	
	
	it('should navigate to the correct pages', function() {
	
	browser.get('https://www.gametwist.com/en/');
	browser.driver.manage().window().maximize();
	login_page.enterUserName();
	login_page.enterPassword();
	login_page.click_login_button();
	
	
    browser.driver.sleep(5000);
	expect(login_page.nickname().getText()).toEqual('vladgreentube');
  }); 
	
});