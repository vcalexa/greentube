exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
  Createnew:'test/create.js',
  Update:'update.js',
  Delete:'delete.js',
  Read:'read.js'
  }
  
};