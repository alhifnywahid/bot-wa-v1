neoxr.create(async (m, {
  client,
  Func
}) => {
 try {
  const buttons = [{
    buttonId: `.menu`,
    buttonText: {
       displayText: 'menu'
    },
    type: 1
 }, {
    buttonId: `.donate`,
    buttonText: {
       displayText: 'donate'
    },
    type: 1
 }]
 await client.sendButtonText(m.chat, 'Hello everyone!', '© Zephyr-bot', buttons)
 } catch (e) {
    client.reply(m.chat, Func.jsonFormat(e), m)
 }
}, {
 hidden: ['zidan'],
 error: false,
}, __filename)
