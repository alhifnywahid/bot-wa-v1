const axios = require('axios')
neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
}) => {
   try {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, 'Hi!'), m)
      if (text.length > 30) return client.reply(m.chat, Func.texted('bold', `🚩 Max 30 character.`), m)
      const exif = global.db.setting
      try {
         pic = await client.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image')
      } catch {
         pic = 'https://srv.neoxr.tk/files/z8hI5T.jpg'
      }
      const obj = {
         "type": "quote",
         "format": "png",
         "backgroundColor": "#FFFFFF",
         "width": 512,
         "height": 768,
         "scale": 2,
         "messages": [{
            "entities": [],
            "avatar": true,
            "from": {
               "id": 1,
               "name": m.quoted ? global.db.users.find(v => v.jid == m.quoted.sender).name : m.pushName,
               "photo": {
                  "url": pic
               }
            },
            "text": text,
            "replyMessage": {}
         }]
      }
      const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
         headers: {
            'Content-Type': 'application/json'
         }
      })    
      const buffer = Buffer.from(json.data.result.image, 'base64')
      client.sendSticker(m.chat, buffer, m, {
         packname: exif.sk_pack,
         author: exif.sk_author
      })
   } catch (e) {
      console.log(e)
      client.reply(m.chat, Func.texted('bold', `🚩 Can't generate sticker.`), m)
   }
}, {
   usage: ['qc'],
   use: 'text',
   category: 'sticker',
   limit: true,
   group: true
}, __filename)
