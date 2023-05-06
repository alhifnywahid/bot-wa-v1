neoxr.create(async (m, {
  client,
  users,
  prefix,
  Func
}) => {
  const buyPremium = [{
    buttonId: `${prefix}premium`,
    buttonText: {
      displayText: 'BUY PREMIUM'
    },
    type: 1
  }]
  try {
     let teks = `➠ Limit : *${Func.formatter(users.limit)}*\n`
     teks += `➠ Game Limit : *${Func.formatter(users.limitGame)}*`
     teks += `${!users.premium ? `\n\nUntuk mendapatkan lebih banyak limit, tingkatkan ke paket premium kirim *${prefix}premium*` : ''}`
     //! SEND MESSAGE WITH TEKS 
     //client.reply(m.chat, teks, m)
     //! SEND MESSAGE WITH BUTTONS
     client.sendButtonText(m.chat, teks, `${global.botname}`, buyPremium)
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['limit'],
  category: 'user info'
}, __filename)
