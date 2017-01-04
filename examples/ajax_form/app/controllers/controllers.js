/* global Config */
class Controllers extends Controller{

    constructor(){
        super();
    }


    // home page
    welcomeController(type){

        this.view.render('welcome.html', $('main'));
    }

    // contact form
    contactController(){

        var data = { form: {
                        name: 'First Name',
                        message: 'Your Message',
                        button: 'Send'}};

        var callback = () => {
            this.sendForm();
        };

        this.view.render('contact.html', $('main'), data, callback);
    }

    // send form after click on the button
    sendForm(){

      $('button').click(function(){

          let name = $('input[name="firstName"]').val();
          let message = $('textarea').val();

          if(name && message) {

              var promise = new Model().sendAjax(name, message);

              promise.then(function(response) {
                  $('section.contact-form').html(`<h2>${response.message}</h2>`);
              }, function(error) {
                  console.error("Failed!", error);
              });

          }
      });

    }

}
