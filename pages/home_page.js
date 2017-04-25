var home_page = function() {
	
	this.acceptCookies = function(){
		
		var okButton= $('.js-cookie-accept-btn');
		browser.wait(() => okButton.isPresent(), 3000);
		okButton.click();
	}
	
	this.enterUserName  = function(text){
		element(by.name('login-nickname')).sendKeys(text);
	
	};
	
	this.enterPassword  = function(text){
		element(by.id('login-password')).sendKeys(text);
	
	};
	
	
	this.click_login_button= function(){
		element(by.buttonText('LOG IN')).click();
	}
	
	this.nickname = function(){
		var nickname = element(by.css('.nickname'));
		return nickname;
	};
	
	this.errorMessage = function(){
		var errorMessage = element(by.xpath('//*[@id="dt-login__login"]/div/fieldset/div[1]/span'));
		return errorMessage;
	};
	
	
	this.clickSlotsButton  = function(){
		element(by.css('[href="/en/games/slots/"]')).click();  //by css attribute
	
	};
	this.clickBingoButton  = function(){
		element(by.css('[href="/en/games/bingo/"]')).click();
	
	};
	this.clickCasinoButton  = function(){
		element(by.css('[href="/en/games/casino/"]')).click();
	
	};
	
	this.clickPokerButton  = function(){
		element(by.css('[href="/en/games/poker/"]')).click();
	
	};
	
	this.searchGame  = function(){
		var search = element(by.id('ctl00_cphNavAndSearch_ctl01_gameSearch'));
	    return search;
	};
	
	
	this.language  = function(){
		var lang = element(by.css('.select-language__button'));
		browser.wait(() => lang.isPresent(), 3000);
	    return lang;
		browser.sleep(500);
	};
	
	this.selectGerman  = function(){
		var german = element(by.css('.select-language__list li:nth-child(2)'));//german option
		browser.wait(() => german.isPresent(), 3000);
	    german.click();
		browser.sleep(500);
	};
	
	
	
	this.result = function(){
		var results = element(by.css('.game-search__list li:nth-child(3)')); //th3rd result from searchbox
		return results;
	};
	this.closePopupButton = function(){
		return element.all(by.css('.WOF-close-x')); //element.all is used so that when the popup 
	}																	// doesn't exist, the test continues;an empty array is returned	
	this.dismissPopup= function(){                     // instead of an exception
		element.all(by.css('.WOF-close-x')).click();
	}
	
};
module.exports  = new home_page();