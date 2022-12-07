
// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      //clean data here
      var cleaner = (text) => {
        var newText = text === null ? text : text.replace(/[^0-9a-z]/gi, '');
        return newText;
      };

      //data is an array of objects
      for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
          var $username = $('<div class="username"></div>');
          var $text = $('<div class="text"></div>');
          $username.text(cleaner(data[i].username));
          $text.text(cleaner(data[i].text));
          $username.appendTo('#chats');
          $text.appendTo('#chats');
        }
      }

      //$><%[]{}#/\
      //for loop to iterate through array
      //loop through objects
      // var $username = ('div>');
      // $username.text(username);

      //initialize current object
      //$('username') = object[username]
      //$text = object[text]
      //append it


      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
