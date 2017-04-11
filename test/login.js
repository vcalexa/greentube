var home_page = require('../pages/home_page.js');
describe('greentube tests', function() {
	browser.ignoreSynchronization = true;
	console.log("----------****--------");
	console.log("----------****--------");
	it('should login', function() {
	
	browser.get('https://www.gametwist.com/en/');
	browser.driver.manage().window().maximize();
	home_page.enterUserName();
	home_page.enterPassword();
	home_page.click_login_button();
	home_page.clickSlotsButton();
	home_page.searchGame('slots');
	
	home_page.results(0).click();
	browser.driver.sleep(3000);
  }); 
	
});