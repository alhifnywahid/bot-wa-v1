neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, `panda`), m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         let json = await Api.wallpaper(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         for (let i = 0; i < 3; i++) {
            var rand = Math.floor(json.data.length * Math.random())
            client.sendFile(m.chat, json.data[rand].url, '', `🍟 *Fetching* : ${((new Date - old) * 1)} ms`, m)
            await Func.delay(2000)
         }
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
}, {
   usage: ['wallpaper'],
   hidden: ['wp'],
   use: 'query',
   category: 'utilities',
   error: false,
   restrict: true,
   premium: true,
   limit: true
}, __filename)
