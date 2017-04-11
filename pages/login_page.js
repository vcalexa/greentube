var login_page = function() {
	
	
	function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
	setTimeout(function(){},5000);
	this.enterUserName  = function(name){
		element(by.name('login-nickname')).sendKeys(name);
	
	};
	setTimeout(function(){},5000);
	this.login_button = element(by.buttonText('LOGIN'));
};
module.exports  = new login_page();