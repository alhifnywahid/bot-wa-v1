neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
}) => {
   global.db.menfess = global.db.menfess ? global.db.menfess : {}
   if (!text) return client.reply(m.chat, Func.example(prefix, command, '628xxxxx | asep | i love u'), m)
   let [jid, name, msg] = text.split`|`
   if ((!jid || !name || !msg)) return client.reply(m.chat, Func.example(prefix, command, '628xxxxx | asep | i love u'), m)
   if (jid == m.sender) return client.reply(m.chat, Func.texted('bold', '🚩 Can\'t send message to yourself.'), m)
   let p = (await client.onWhatsApp(jid))[0] || {}
   if (!p.exists) return client.reply(m.chat, Func.texted('bold', '🚩 Number not registered on WhatsApp.'), m)
   let mf = Object.values(global.db.menfess).find(mf => mf.status === true)
   if (mf) return !0
   try {
      let id = +new Date
      let txt = `📩 You got *+1* menfess message from : *${name.trim()}*\n\n`
      txt += `“${msg.trim()}”`
      await client.reply(p.jid, txt, m)
      client.sendReact(m.chat, '✅', m.key)
      global.db.menfess[id] = {
         id,
         from: m.sender,
         name,
         receiver: p.jid,
         msg,
         status: false
      }
      return !0
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['menfess'],
   hidden: ['menfes', 'confes', 'confess'],
   use: '628xxx | ayu | i love u',
   category: 'utilities',
   private: true,
   premium: true,
   limit: true
}, __filename)
