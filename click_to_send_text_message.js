var submitButton = document.getElementById('submit');

var me = function() {
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;
  alert(phone);
  alert(message);

  Twilio.phone = "+1 484-685-0584";
  Twilio.sendMessage(phone, message);
}

// max
submitButton.onclick = me;