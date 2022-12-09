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

    var message = {
      username: window.location.search.slice(10),
      text: $('#message')[0].value,
      roomname: 'Lobby'
    };

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    if ($('#message')[0].value.length > 1) {
      Parse.create(message);
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};