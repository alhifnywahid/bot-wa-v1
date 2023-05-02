neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'sasimo'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.kbbg(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let teks = `乂  *K B B G*\n\n`
         teks += json.data.description
         client.reply(m.chat, teks, m)
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
}, {
   usage: ['kbbg'],
   use: 'word',
   category: 'utilities',
   error: false,
   restrict: true
}, __filename)
