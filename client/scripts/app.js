
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
    App.fetch(App.stopSpinner());

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

      for (var i = 0; i < data.length; i++) {
        data[i]['roomname'] = cleaner(data[i]['roomname']);
        data[i]['text'] = cleaner(data[i]['text']);
        data[i]['username'] = cleaner(data[i]['username']);
      }

      Rooms.update(data);
      console.log(Rooms._data);


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
  },

};

$('#refresh').on('click', () => {
  console.log('refresh');
  App.startSpinner();
  App.fetch(App.stopSpinner());
});
