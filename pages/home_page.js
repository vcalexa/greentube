var home_page = function() {
	
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
	
	this.searchGame  = function(text){
		element(by.id('ctl00_cphNavAndSearch_ctl01_gameSearch')).sendKeys(text);
	
	};
	
	this.results = function(){
		var results = element(by.css('[id="aspnetForm"]')); 
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