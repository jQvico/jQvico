var Config = {
    
    // Set true for developer version
    dev: true,
    
    restUrl: 'http://buycheapfly.local/',
    
    // Define here all javaScript files which going to be included in the project
    scripts: [
        'libs/mustache.min.js',
        'app/system/global.js',
        'app/config/router.js',
        'app/system/core.js',
        'app/system/view.js',
        'app/system/controller.js',
        'app/controllers/controllers.js',
        'app/models/model.js'
    ],
    
    // Define here all CSS files which going to be included in the project
    styles: [
        'files/css/styles.css'
    ],
    
    // Set version of files in version variable
    // Do not remove this function. It's responsible for refreshing static files.
    deployVer: function () {
        var version = null; // ie: 1, 2, 3 ...
        if (this.dev === true) {
            version = Math.random();
        }
        return version;
    }
    
};
