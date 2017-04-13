var home_page = require('../pages/home_page.js');
var testData= require('../test.json');
describe('log in and out tests', function() {
	var testData= require('../test.json');//for security purposes a json will be used to provide credentials
	browser.ignoreSynchronization = true;
	
	beforeEach(function() {
        browser.get('https://www.gametwist.com/en/');
		browser.driver.manage().window().maximize();
    });
	
	it('should not login with invalid credentials' , function(){
		home_page.enterUserName(testData.badusername);
	home_page.enterPassword(testData.badpassword);
	home_page.click_login_button();
	var error = home_page.errorMessage();
	browser.wait(() => error.isPresent(), 3000);
	expect(error.isPresent()).toBe(true);
	});
	
	it('should login and log out successfully', function() {
	
	home_page.enterUserName(testData.username);
	home_page.enterPassword(testData.password);
	home_page.click_login_button();
	browser.driver.sleep(2000);
	if (home_page.closePopupButton().isPresent()){    //if a popup is present it will be closed
		home_page.dismissPopup();
	};
	expect(home_page.nickname().getText()).toEqual('vladgreentube');
	home_page.nickname().click();
	element(by.buttonText('Log out')).click();
	browser.driver.sleep(2000);
	expect(home_page.nickname().getText()).toEqual('');//after logout the nickname field should be empty
	
  }); 
  
});