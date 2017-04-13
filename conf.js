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
  specs: [
	   'test/login.js',
	   //'test/navigation.js',
       //'test/changelanguage.js',
       //'test/searchbox.js',
 
  ]
  
};