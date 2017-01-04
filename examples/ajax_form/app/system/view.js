/* global Config, Mustache */
// views
class View {

    constructor(){
        this.path = 'app/views/';    
        this.template = '';
        this.variables = {};
        this.ver = Config.deployVer();
    }
    
    // render template
    render(template, target, data, fn){

        var rendered = '';
        
        if(template.indexOf('.html') != -1){
            
            let source = this.path + template + (this.ver ? '?v=' + this.ver : '');
            
            // https://github.com/janl/mustache.js
            $.get(source, (response) => {
                rendered = Mustache.render(response, data);
                this.afterRender(target, rendered, fn);
            }, 'html').fail(function() {
                console.log('Error: Template "' + source + '" does not exit.');
            });
        }
        else{
            // for plain text
            this.scope = target;
            rendered = template;
            this.afterRender(target, rendered, fn);
        }
        
    }
    
    // execute this after render tamplate
    afterRender(target, rendered, fn){
    
        if(target){
            target.html(rendered);
        }
    
        this.map(target);
        
        if(fn){
            fn();
        }
        
    }
    
    // mapping variables
    map(target){
        
        if(!target){
            target = $('body');
        }
        
        var that = this;
        var tmpObj = {};
        var variableDom = target.find('[data-var]');
        
        variableDom.each(function(){
            let atrrName = $(this).attr('data-var');
            tmpObj[atrrName] = '';
            that.vars = tmpObj;
            $(this).keyup(function(){
                let varVal = $(this).val();
                tmpObj[atrrName] = varVal;
                that.vars = tmpObj;
                $('[data-var-map="' + atrrName + '"]').text(varVal);
                $('[data-var-map="' + atrrName + '"]').val(varVal);
            });
        });
    }
    
    // set new vars modificated in teh view
    set vars(obj){
        for(let o in obj){
            this.variables[o] = obj[o];
        }
    }
    
    // read view vars
    get vars(){
        return this.variables;
    }
    
};