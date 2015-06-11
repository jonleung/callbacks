var submitButton = document.getElementById('submit');
var messages = document.getElementById('logs');

var me = function() {
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  var sentence = message + " was sent to " + phone;

  var listItem = document.createElement("li");
  listItem.textContent = sentence;
  messages.appendChild(listItem);

  Twilio.phone = "+1 484-685-0584";
  Twilio.sendMessage(phone, message);
}

// max
submitButton.onclick = me;