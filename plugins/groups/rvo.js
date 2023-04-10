neoxr.create(async (m, {
   client,
   text,
   users,
   Func
}) => {
   try {
if (!m.quoted) return client.reply(m.chat, Func.texted('bold', `🚩 Reply view once message to use this command.`), m)
         if (m.quoted.message) {
            let type = Object.keys(m.quoted.message)[0]
            let q = m.quoted.message[type]
            let media = await client.downloadMediaMessage(q)
            if (/video/.test(type)) {
               return await client.sendFile(m.chat, media, '', q.caption || '', m)
            } else if (/image/.test(type)) {
               return await client.sendFile(m.chat, media, '', q.caption || '', m)
            }
         } else client.reply(m.chat, Func.texted('bold', `Stress ??`), m)
         } catch {
      client.reply(m.chat, global.status.error, m)
   }
}, {
   usage: ['rvo'],
   hidden: ['lihat'],
   category: 'group',
   group: true
}, __filename)