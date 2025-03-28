const translate = require('translate-google-api')
neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
}) => {
   if (!text) return client.reply(m.chat, Func.example(prefix, command, 'id i love you'), m)
   if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2)
      try {
         let data = m.quoted.text
         let result = await translate(`${data}`, {
            to: lang
         })
         client.reply(m.chat, result[0], m)
      } catch {
         return client.reply(m.chat, Func.texted('bold', `🚩 Language code not supported.`), m)
      }
   } else if (text) {
      let lang = text.slice(0, 2)
      try {
         let data = text.substring(2).trim()
         let result = await translate(`${data}`, {
            to: lang
         })
         client.reply(m.chat, result[0], m)
      } catch {
         return client.reply(m.chat, Func.texted('bold', `🚩 Language code not supported.`), m)
      }
   }
}, {
   usage: ['translate'],
   hidden: ['tr'],
   use: 'iso text',
   category: 'converter',
   limit: true
}, __filename)
