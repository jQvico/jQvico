
class Router{

    constructor(){
        this.classController = new Controllers();
    }

    getRouter(){
        return [
            // default controller
            {'': [
                {method: 'welcomeController', class: this.classController}
            ]},
            {contact: [
                {method: 'contactController', class: this.classController}
            ]}
        ];
    }
}
