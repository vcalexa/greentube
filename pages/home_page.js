var home_page = function() {
	
	this.enterUserName  = function(){
		element(by.name('login-nickname')).sendKeys('vladgreentube');
	
	};
	
	this.enterPassword  = function(){
		element(by.id('login-password')).sendKeys('1qaz2wsx');
	
	};
	
	
	this.click_login_button= function(){
		element(by.buttonText('LOG IN')).click();
	}
	
	this.nickname = function(){
		var nickname = element(by.css('.nickname'));
		return nickname;
	};
	
	
	this.clickSlotsButton  = function(){
		element.all(by.xpath("//*[contains(text(), 'Slots')]")).click();
	
	};
	this.clickBingoButton  = function(){
		element.all(by.xpath("//*[contains(text(), 'Bingo')]")).click();
	
	};
	this.clickCasinoButton  = function(){
		element.all(by.xpath("//*[contains(text(), 'Casino')]")).click();
	
	};
	
	this.clickPokerButton  = function(){
		element.all(by.xpath("//*[contains(text(), 'Poker')]")).click();
	
	};
	
	this.searchGame  = function(text){
		//element(by.id('ctl00_cphNavAndSearch_ctl01_gameSearch')).click();
		element(by.id('ctl00_cphNavAndSearch_ctl01_gameSearch')).sendKeys(text);
	
	};
	
	this.results = function(){
		var results = element(by.css('.game-search__list'));
		return results;
	};
	
	
};
module.exports  = new home_page();