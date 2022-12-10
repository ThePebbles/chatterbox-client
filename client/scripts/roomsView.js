// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    for (var room in Rooms._data) {
      var $room = $('<option value="' + Rooms._data[room] + '">' + Rooms._data[room] + '</option>');
      $room.appendTo(RoomsView.$select);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    roomname = roomname || RoomsView.$select[0][0].value;
    var $roomname = $('<option value="' + roomname + '">' + roomname + '</option>');
    $roomname.appendTo(RoomsView.$select);
    MessagesView.render(roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    MessagesView.$chats.empty();
    RoomsView.renderRoom(RoomsView.$select.val());
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button
    var newRoom = prompt('Please enter a new room!');
    Rooms.add(newRoom);
  }
};
