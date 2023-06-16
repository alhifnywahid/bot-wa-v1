neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   Func
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://www.instagram.com/p/CK0tLXyAzEI'), m)
         if (!args[0].match(/(https:\/\/www.instagram.com)/gi)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         let json = await Api.ig(Func.igFixed(args[0]))
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         json.data.map(async v => {
            client.sendFile(m.chat, v.url, v.type == 'mp4' ? Func.filename('mp4') : Func.filename('jpg'), `🍟 *Fetching* : ${((new Date - old) * 1)} ms`, m)
            await Func.delay(1500)
         })
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
}, {
   usage: ['instagram'],
   hidden: ['igdl'],
   use: 'link',
   category: 'download',
   error: false,
   limit: true
}, __filename)
