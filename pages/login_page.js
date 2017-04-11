var login_page = function() {
	
	
	
	this.enterUserName  = function(name){
		element(by.name('login-nickname')).sendKeys(name);
	
	};
	
	
	
	
	this.click_login_button= function(){
		element(by.css('.btn--primary')).click();
	}
};
module.exports  = new login_page();