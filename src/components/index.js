function sms()
{
  var accountSid ='AC64e4caf4becc9f837be6fdb96f4e79be'
  var authToken='20b0abcfb8cceaa02ebc57af2e307f1a'
  var twilio = require('twilio');
  var client = new twilio(accountSid, authToken);

    client.messages.create({
      body: "Ai primit un mesaj",
      to: '+40756681417',
      from: '+12057728576'
    })
    .then((message) => console.log("Mesajul a fost trimis cu succes"));
}
sms()