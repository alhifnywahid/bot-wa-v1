neoxr.create(async (m, {
   client,
   text,
   command,
   participants,
   isOwner,
   Func
}) => {
   try {
      let input = text ? text : m.quoted ? m.quoted.sender : m.mentionedJid.length > 0 ? m.mentioneJid[0] : false
      if (!input) return client.reply(m.chat, Func.texted('bold', `🚩 Mention or reply chat target.`), m)
      let p = await client.onWhatsApp(input.trim())
      if (p.length == 0) return client.reply(m.chat, Func.texted('bold', `🚩 Invalid number.`), m)
      let jid = client.decodeJid(p[0].jid)
      let number = jid.replace(/@.+/, '')
      if (command == 'kick') {
         let member = participants.find(u => u.id == jid)
         if (!member) return client.reply(m.chat, Func.texted('bold', `🚩 @${number} already left or does not exist in this group.`), m)
         client.groupParticipantsUpdate(m.chat, [jid], 'remove').then(res => m.reply(Func.jsonFormat(res)))
      } else if (command == 'add') {
         if (!isOwner) return client.reply(m.chat, global.status.owner, m)
         let member = participants.find(u => u.id == jid)
         if (member) return client.reply(m.chat, Func.texted('bold', `🚩 @${number} already in this group.`), m)
         client.groupParticipantsUpdate(m.chat, [jid], 'add').then(res => m.reply(Func.jsonFormat(res)))
      } else if (command == 'demote') {
         let member = participants.find(u => u.id == jid)
         if (!member) return client.reply(m.chat, Func.texted('bold', `🚩 @${number} already left or does not exist in this group.`), m)
         client.groupParticipantsUpdate(m.chat, [jid], 'demote').then(res => m.reply(Func.jsonFormat(res)))
      } else if (command == 'promote') {
         let member = participants.find(u => u.id == jid)
         if (!member) return client.reply(m.chat, Func.texted('bold', `🚩 @${number} already left or does not exist in this group.`), m)
         client.groupParticipantsUpdate(m.chat, [jid], 'promote').then(res => m.reply(Func.jsonFormat(res)))
      }
   } catch (e) {
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['demote', 'kick', 'add', 'promote'],
   use: 'mention or reply',
   category: 'admin tools',
   group: true,
   admin: true,
   botAdmin: true
}, __filename)
