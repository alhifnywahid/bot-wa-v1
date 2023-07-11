neoxr.create(async (m, {
  command,
  prefix,
  client,
  text,
  participants,
  Func
}) => {
  try {
    if (!text) return client.reply(m.chat, Func.example(prefix, command, 'Save No ku bang'))
    client.sendReact(m.chat, '🕒', m.key)
     let rows = []
           participants.map(async (v, i) => {
              rows.push({
                 number: v.id
              })
           })
     for (let i in rows) {
       await Func.delay(2000)
       let nmb = await client.sendContact(rows[i].number, [{
     name: global.owner_name,
     number: global.owner,
     about: 'Owner & Creator'
  }], null, {
     org: 'Bot Whatsapp By Gopret',
     website: 'https://zehpyrbot.com',
     email: 'zephyrbot@gmail.com'
  })
       await Func.delay(1500)
       await client.reply(rows[i].number, text, nmb)
     }
     await client.reply(m.chat, '*Successfully Send Messages to All Group Members*', m)
  } catch (e) {
    client.reply(m.chat, global.status.fail, m)
  }
}, {
  usage: ['pushkontak'],
  category: 'owner',
  owner: true,
  group: true
}, __filename);
