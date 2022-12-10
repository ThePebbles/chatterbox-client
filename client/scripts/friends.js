// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  update: function (username) {
    Friends._data.push(username);
  },

  toggleStatus: function(username) {
    //go through messages
    Messages._data.forEach((messageBlock) => {
      if (messageBlock['username'] === username) {
        messageBlock['friend'] = true;
      }
    });
    MessagesView.$chats.empty();
    RoomsView.renderRoom(RoomsView.$select.val());
  }
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};