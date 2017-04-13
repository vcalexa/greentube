var home_page = require('../pages/home_page.js');
describe('log in and out tests', function() {
	browser.ignoreSynchronization = true;
	
	beforeEach(function() {
        browser.get('https://www.gametwist.com/en/');
		browser.driver.manage().window().maximize();
    });
	
	it('should not login with invalid credentials' , function(){
		home_page.enterUserName('vladgreentube');
	home_page.enterPassword('1qaz2wsx123');
	home_page.click_login_button();
	var error = home_page.errorMessage();
	browser.wait(() => error.isPresent(), 3000);
	expect(error.isPresent()).toBe(true);
	});
	
	it('should login and log out successfully', function() {
	
	home_page.enterUserName('vladgreentube');
	home_page.enterPassword('1qaz2wsx');
	home_page.click_login_button();
	browser.driver.sleep(2000);
	if (home_page.closePopupButton().isPresent()){    //if a popup is present it will be closed
		home_page.dismissPopup();
	};
	expect(home_page.nickname().getText()).toEqual('vladgreentube');
	browser.driver.sleep(2000);
	home_page.nickname().click();
	element(by.buttonText('Log out')).click();
	browser.driver.sleep(3000);
	expect(home_page.nickname().getText()).toEqual('');//after logout the nickname field should be empty
	
  }); 
  
});