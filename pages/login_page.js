var login_page = function() {
	
	
	this.enterUserName  = function(name){
		element(by.name('login-nickname-ctl00$cphHeader$ctl00')).sendKeys(name);
	
	};
	
	this.login_button = element(by.buttonText(''LOGIN'));
};
module.exports  = new login_page();