
class Router{
    
    constructor(){
        this.classController = new Controllers();
    }
    
    getRouter(){
        return [
            // default controller
            {'': [
                {method: 'headerController', class: this.classController},
                {method: 'homeController', class: this.classController}
            ]}
        ];
    }
}
