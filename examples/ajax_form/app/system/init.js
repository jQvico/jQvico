/* global Config */
class Init{
    
    constructor(){
        this.ver = Config.deployVer();
    }
    
    // load scripts on the bottom of the body
    loadScript(loadScripts){
        for(var i in loadScripts){
            if(Config.loadedScripts.has(loadScripts[i]) === false){
                $('<script src="' + loadScripts[i] + (this.ver ? '?v=' + this.ver : '') + '"></script>').appendTo(document.body);
                Config.loadedScripts.add(loadScripts[i]);
            }
        }
    }
    
    // load css in the head
    loadStyle(loadStyles){
        for(var i in loadStyles){
            if(Config.loadedStyles.has(loadStyles[i]) === false){
                $('<link rel="stylesheet" type="text/css" href="' + loadStyles[i] + (this.ver ? '?v=' + this.ver : '') + '">').appendTo(document.head);
                Config.loadedStyles.add(loadStyles[i]);
            }
        }
    }
}

$(function(){
    
    Config.loadedScripts = new Set();
    Config.loadedStyles = new Set();
    
    var ini = new Init();
    ini.loadScript(Config.scripts);
    ini.loadStyle(Config.styles);
    
    var core = new Core();
    core.callRouter();
    core.getRouter();
});