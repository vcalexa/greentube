exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  multiCapabilities:[ 
  
  {
    browserName: 'chrome',
	'chromeOptions':{
		
	//to allows notificatons	
	prefs:{
		
		'profile.managed_default_content_settings.notifications':1,
		'profile': {
                  'password_manager_enabled': false
              }
	}
	
	}
	
  }],
  suites: {
	   Login:'test/login.js',
  Language:'test/changelanguage.js',
  Search:'test/searchbox.js',
 
  //Logout:'test/logout.js',
 // Navigation:'test/navigation.js',
//  Language:'test/changelanguage.js'
 
  }
  
};