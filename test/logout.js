var home_page = require('../pages/home_page.js');
describe('greentube tests', function() {
	browser.ignoreSynchronization = true;
	
	beforeEach(function() {
        browser.get('https://www.gametwist.com/en/');
		browser.driver.manage().window().maximize();
    });
	
	it('should logout successfully', function() {
	home_page.enterUserName('vladgreentube');
	home_page.enterPassword('1qaz2wsx');
	home_page.click_login_button();
	browser.driver.sleep(2000);
	if (home_page.closePopupButton().isPresent()){    //if a popup is present it will be closed
		home_page.dismissPopup();
	};
	
	home_page.nickname().click();
	element(by.buttonText('Log out')).click();
	browser.driver.sleep(3000);
	expect(home_page.nickname().getText()).toEqual('');//after logout the nickname field should be empty
	
  }); 
	
});