const { decode } = require('html-entities')
neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   Func
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://www.mediafire.com/file/1fqjqg7e8e2v3ao/YOWA.v8.87_By.SamMods.apk/file'), m)
         if (!args[0].match(/(https:\/\/www.mediafire.com\/)/gi)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.mediafire(args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let text = `乂  *M E D I A F I R E*\n\n`
         text += '	◦  *Name* : ' + unescape(decode(json.data.filename)) + '\n'
         text += '	◦  *Size* : ' + json.data.size + '\n'
         text += '	◦  *Extension* : ' + json.data.extension + '\n'
         text += '	◦  *Mime* : ' + json.data.mime + '\n'
         text += '	◦  *Uploaded* : ' + json.data.uploaded + '\n\n'
         text += global.footer
         let chSize = Func.sizeLimit(json.data.size, global.max_upload)
         if (chSize.oversize) return client.reply(m.chat, `💀 File size (${json.data.size}) exceeds the maximum limit, download it by yourself via this link : ${await (await scrap.shorten(json.data.link)).data.url}`, m)
         client.sendMessageModify(m.chat, text, m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/fcf56d646aa059af84126.jpg')
         }).then(async () => {
            client.sendFile(m.chat, json.data.link, unescape(decode(json.data.filename)), '', m)
         })
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
}, {
   usage: ['mediafire'],
   hidden: ['mf', 'mfdl'],
   use: 'link',
   category: 'download',
   error: false,
   limit: true
}, __filename)
