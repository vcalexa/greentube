var home_page = require('../pages/home_page.js');
browser.ignoreSynchronization = true;
describe('greentube tests2', function() {
	
	
	
	 beforeEach(function() {
        browser.get('https://www.gametwist.com/en/');
		browser.driver.manage().window().maximize();
    });

	
	it('should navigate to the correct Slots page', function() {
	
	
	home_page.clickSlotsButton();
	var currentUrl = browser.getCurrentUrl();
	expect(currentUrl).toEqual('https://www.gametwist.com/en/games/slots/');
	
  }); 
  
  it('should navigate to the correct Bingo page', function() {
	
	home_page.clickBingoButton();
	var currentUrl = browser.getCurrentUrl();
	expect(currentUrl).toEqual('https://www.gametwist.com/en/games/bingo/');
	
  }); 
  
  it('should navigate to the correct Casino page', function() {
	
	home_page.clickCasinoButton();
	var currentUrl = browser.getCurrentUrl();
	expect(currentUrl).toEqual('https://www.gametwist.com/en/games/casino/');
	
  }); 
  
  it('should navigate to the correct Poker page', function() {
	
	home_page.clickPokerButton();
	var currentUrl = browser.getCurrentUrl();
	expect(currentUrl).toEqual('https://www.gametwist.com/en/games/poker/');
	
  }); 
  
  
	
});