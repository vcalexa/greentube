exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  multiCapabilities:[ 
  
  {
    browserName: 'chrome',
	'chromeOptions':{
		
		
	'args': ['disable-infobars=true'], //disable 'chrome is controlled by automation" message
	
		
	prefs:{
		
		'profile.managed_default_content_settings.notifications':1, //to allows notificatons
		'credentials_enable_service': false   //don't ask to save passwords
	}
	
	}
	
  }],
  specs: [
	   'test/login.js',
	   'test/navigation.js',
       'test/changelanguage.js',
       'test/searchbox.js',
 
  ]
  
};