// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  // TODO: Define how you want to store your messages.
  _data: [],

  update: function (data) {
    //push data into data structure
    //looping through data
    for (var i = 0; i < data.length; i++) {
      var messageTemplate = {};
      if (Messages._data.indexOf(data[i]['text']) === -1) {
        messageTemplate['username'] = data[i]['username'];
        messageTemplate['text'] = data[i]['text'];
        messageTemplate['room'] = data[i]['roomname'];
        Messages._data.push(messageTemplate);
      }
    }
    //MessagesView.render();
  }
  //message object
  //username, text, roomname object keys

  //on button click (submit)
  //need to grab message text, username, and current room

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};