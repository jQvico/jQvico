/* global Config, Router */

class Core extends Global{

    // read router name from URL
    readRouter(){
        
        var routerName = '';
        var initRouter = window.location.href.split('#');
     
        if(initRouter[1]){
            routerName = initRouter[1];
        }
        
        return routerName;
    }
    
    // execute router
    callRouter(){
        this.callController(this.readRouter());
    }

    // detect change url and call router
    getRouter(){
        $(window).bind('popstate', (e) => {
            var state = e.originalEvent.state;
            if(state === null) { 
                this.callRouter();
            }
        });
    }
    
    // execute user controller
    // eg: #ctrlname,1/2/3 -> ctrlname([1,2,3])
    callController(_userCntr){
        var userCntr = _userCntr.split(',');
        var rout = new Router().getRouter();
        for(let b in rout){
            if(Object.keys(rout[b]) == userCntr[0]){
                for(let a in rout[b]){
                    for(let c in rout[b][a]){
                        
                        let _controler = rout[b][a][c].method;
                        let controler = _controler.split(',');
                        let namespace = rout[b][a][c].class;
                        
                        if (typeof namespace[controler[0]] == 'function'){
                            
                            let params = [''];
                            
                            if(controler[1]){
                                params = controler[1].split(',');
                            }
                            else if(userCntr[1]){
                                params = userCntr[1].split(',');
                            }
                        
                            namespace[controler[0]](params[0].split('/'));
                        }
                        else{
                            console.log('Error: function "' + namespace + '.' + controler[0] + '" does not exist.');
                        }
                    }
                }
            }
        }
    }
};