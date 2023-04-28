neoxr.create(async (m, {
   client,
   text,
   prefix,
   command
   }) => {
      try {
         let exif = global.db.setting
         if (!text) return client.reply(m.chat, Func.example(prefix, command, '😳+😩'), m)
         let [emo1, emo2] = text.split`+`
         if (!emo1 || !emo2) return client.reply(m.chat, Func.texted('bold', `🚩 Give 2 emoticons to mix.`), m)
         let json = await Api.emojimix(emo1 + '_' + emo2)
         if (!json.status) return client.reply(m.chat, Func.texted('bold', `🚩 Emoticons can't be mixed.`), m)
         await client.sendSticker(m.chat, await Func.fetchBuffer(json.data.url), m, {
            packname: exif.sk_pack,
            author: exif.sk_author,
            categories: [emo1, emo2]
         })
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
}, {
   usage: ['emojimix'],
   hidden: ['mix', 'emomix'],
   use: 'emoji + emoji',
   category: 'features',
   premium: true,
   limit: true
}, __filename)
