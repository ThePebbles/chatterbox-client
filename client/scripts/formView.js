// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    // console.log(FormView.$form.find('input[type=text]').length);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log(event);
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    // if (FormView.$form.find('input[type=text]').length > 1) {
    //   setStatus(active);
    // }
    //as soon as one character is typed into text box,
      //set status to true
    //jquery on submit click
      //invoke the parse create function

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};