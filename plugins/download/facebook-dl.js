neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   Func
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://fb.watch/7B5KBCgdO3'), m)
         if (!args[0].match(/(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.fb(args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let result = json.data.find(v => v.quality == 'HD' && v.response == 200)
         if (result) {
            client.sendFile(m.chat, result.url, Func.filename('mp4'), `◦ *Quality* : HD`, m)
         } else {
            let result = json.data.find(v => v.quality == 'SD' && v.response == 200)
            if (!result) return client.reply(m.chat, global.status.fail, m)
            client.sendFile(m.chat, result.url, Func.filename('mp4'), `◦ *Quality* : SD`, m)
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
}, {
   usage: ['facebook'],
   hidden: ['fbdl', 'fbvid', 'fb'],
   use: 'link',
   category: 'searching',
   error: false,
   limit: true
}, __filename)
