neoxr.create(async (m, {
   client,
   text,
   prefix,
   participants,
   command,
   Func
}) => {
   try {
       let users = participants.map(u => u.id)
      await client.reply(m.chat, text, null, {
         mentions: users
      })
} catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['hidetag'],
   use: '',
   category: 'admin tools',
   admin: true,
   group: true
}, __filename)
