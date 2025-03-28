neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   Func
}) => {
   try {
      if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://chat.whatsapp.com/codeInvite'), m)
      let link = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
      let [_, code] = args[0].match(link) || []
      if (!code) return client.reply(m.chat, global.status.invalid, m)
      let id = await client.groupAcceptInvite(code)
      if (!id.endsWith('g.us')) return client.reply(m.chat, Func.texted('bold', `🚩 Sorry i can't join to this group :(`), m)
      let member = await (await client.groupMetadata(id)).participants.map(v => v.id)
      return client.reply(m.chat, `🚩 Joined!`, m)
   } catch {
      return client.reply(m.chat, Func.texted('bold', `🚩 Sorry i can't join to this group :(`), m)
   }
}, {
   usage: ['join'],
   use: ['group link'],
   category: 'owner'
}, __filename)
