neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    const buttons = [
      {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
      {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
      {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
    ]
    
    const buttonMessage = {
        text: "Hi it's button message",
        footer: 'Hello World',
        buttons: buttons,
        headerType: 1
    }
    client.reply(m.chat, buttons, m)
  } catch (e) {
    client.reply(m.chat, Func.jsonFormat(e), m);
  }
}, {
  usage: ['wonik'],
  category: 'a new feature',
  premium: true,
  limit: 1,
}, __filename);
