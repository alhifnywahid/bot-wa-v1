neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   isBotAdmin,
   Func
}) => {
   try {
      if (!m.quoted) return
      client.sendMessage(m.chat, {
         delete: {
            remoteJid: m.chat,
            fromMe: isBotAdmin ? false : true,
            id: m.quoted.id,
            participant: m.quoted.sender
         }
      })
   } catch (e) {
      client.reply(m.chat, e, m)
      console.log(e)
   }
}, {
   usage: ['delete'],
   hidden: ['del'],
   use: 'reply chat',
   category: 'group',
   group: true,
   premium: true
}, __filename)
