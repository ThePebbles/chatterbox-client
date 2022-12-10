// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  update: function (data) {
    for (var i = 0; i < data.length; i++) {
      if (Rooms._data.indexOf(data[i]['roomname']) === -1) {
        Rooms._data.push(data[i]['roomname']);
      }
    }
    RoomsView.render();
  },

  add: function (roomname) {
    var $roomname = $('<option value="' + roomname + '">' + roomname + '</option>');
    $roomname.appendTo(RoomsView.$select);
    Rooms._data.push(roomname);
    MessagesView.$chats.empty();
    RoomsView.$select.val(roomname);
  }

};