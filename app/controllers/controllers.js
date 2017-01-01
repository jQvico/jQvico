/* global Config */
class Controllers extends Controller{

    constructor(){
        super();
    }
    
    
    // header, menu - start page
    headerController(type){
        
        this.view.render('header.html', $('header'), {type: type});
    }
    
    // home page
    homeController(){
        
        var data = {message: 'Hello'};
        
        var callback = function(){
        };

        this.view.render('home.html', $('main'), data, callback);
    }
    
};
