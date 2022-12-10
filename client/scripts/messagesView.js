// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function(roomname) {
    // TODO: Render _all_ the messages.
    for (var i = 0; i < Messages._data.length; i++) {
      if (Messages._data[i]['room'] === roomname) {
        var $chatBubble = $('<div class="chatBubble"></div>');
        var $username = $('<div class="username"></div>');
        $username.text(Messages._data[i]['username'] + ':');
        var $text = $('<div class="text"></div>');
        $text.text(Messages._data[i]['text']);

        if (Messages._data[i]['friend']) {
          $chatBubble.addClass('friend');
        }

        $username.appendTo($chatBubble);
        $text.appendTo($chatBubble);
        $chatBubble.appendTo(MessagesView.$chats);
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $chatBubble = $('<div class="chatBubble"></div>');
    var $username = $('<div class="user"></div>');
    $username.text(message['username'] + ':');
    var $text = $('<div class="text"></div>');
    $text.text(message['text']);
    $username.appendTo($chatBubble);
    $text.appendTo($chatBubble);
    $chatBubble.prependTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //grab user name from click
    var currentUser = event.target.innerText;
    var newUser = currentUser.slice(0, currentUser.length - 1);

    Friends.update(newUser);
    Friends.toggleStatus(newUser);
    console.log(Messages._data);
  }
};