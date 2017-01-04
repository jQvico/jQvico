// models & services
class Model {

  // send data by AJAX
  sendAjax(formName, formMessage){

      return new Promise(function(resolve, reject) {

          $.ajax({
              type: 'POST',
              url: Config.restUrl + 'message.php',
              data: {
                name: formName,
                message: formMessage
              }
          }).done( (ret) => {

              if (ret.status == 'ok') {
                  resolve(ret);
              }
              else {
                  reject(`Error: ${ret.status}`);
              }

          });
      });
  }

}
