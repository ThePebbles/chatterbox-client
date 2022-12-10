// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //render
    // MessagesView.$select.on('click', MessagesView.handleClick);
  },

  render: function(roomname) {
    // TODO: Render _all_ the messages.
    for (var i = 0; i < Messages._data.length; i++) {
      var $chatBubble = $('<div class="chatBubble"></div>');
      if (Messages._data[i]['room'] === roomname) {
        var $user = $('<div class="user"></div>');
        $user.text(Messages._data[i]['user'] + ':');
        var $text = $('<div class="text"></div>');

        $text.text(Messages._data[i]['text']);
        $user.appendTo($chatBubble);
        $text.appendTo($chatBubble);
      }
      $chatBubble.appendTo(MessagesView.$chats);
      $chatBubble.on('click', MessagesView.handleClick);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //printing new message to the top
    var $chatBubble = $('<div class="chatBubble"></div>');
    var $user = $('<div class="user"></div>');
    $user.text(message['username'] + ':');
    var $text = $('<div class="text"></div>');
    $text.text(message['text']);
    $user.appendTo($chatBubble);
    $text.appendTo($chatBubble);
    $chatBubble.prependTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //grab user name from click
    console.log('hi');
  }

};