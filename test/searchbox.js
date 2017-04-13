var home_page = require('../pages/home_page.js');
describe('searchbox functionality ', function() {
	browser.ignoreSynchronization = true;
	
	beforeEach(function() {
        browser.get('https://www.gametwist.com/en/');
		browser.driver.manage().window().maximize();
    });
	
	
	it('should find and click on the 3rd result' , function(){
		
	home_page.enterUserName('vladgreentube');
	home_page.enterPassword('1qaz2wsx');
	home_page.click_login_button();
	browser.driver.sleep(3000);
	 if (home_page.closePopupButton().isPresent()){    //if a popup is present it will be closed
		home_page.dismissPopup();
	};
	var searchGame=home_page.searchGame();
	browser.wait(() => searchGame.isPresent(), 3000);
	searchGame.sendKeys('slots');
	var result = home_page.result();
	home_page.searchGame('slots');
	browser.wait(() => result.isPresent(), 3000);
	result.click();
	var currentUrl = browser.getCurrentUrl();
	var gameUrl = 'https://www.gametwist.com/en/games/slots/cleopatra-queen-of-slots/';//the 3rd game result URL
	expect(currentUrl).toEqual(gameUrl);
	
	});
	
	
	
	
});