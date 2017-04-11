var login_page = require('../pages/login_page.js');
describe('greentube tests', function() {
	browser.ignoreSynchronization = true;
	console.log("----------****--------");
	
	it('should login', function() {
	
	browser.get('https://www.gametwist.com/en/');
	browser.driver.manage().window().maximize();
	login_page.enterUserName('test1');
	login_page.click_login_button();
	browser.driver.sleep(5000);
	
  }); 
	
});