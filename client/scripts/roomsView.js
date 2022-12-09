// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //add options for the existing rooms in data
    //default selection to lobby
    RoomsView.$select.on('click', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    //loop through data
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log('hi');
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    console.log('hi2');
  }

};
