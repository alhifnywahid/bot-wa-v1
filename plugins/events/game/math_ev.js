neoxr.create(async (m, {
   client,
   body,
   users,
   prefixes,
   Func
}) => {
   try {
      var id = m.chat
      var reward = Func.randomInt(global.min_reward, global.max_reward)
      client.math = client.math ? client.math : {}
      if (m.quoted && m.quoted.sender != client.decodeJid(client.user.id)) return
      if (m.quoted && /mathskip/i.test(m.quoted.text)) {
         if (!(id in client.math) && /mathskip/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `🚩 Pertanyaan telah berakhir, kirim _${prefixes[0]}math_ untuk mendapatkan pertanyaan baru.`), m)
          let math = JSON.parse(JSON.stringify(client.math[id][1]))
         if (body == math.result) {
            users.point += reward
            clearTimeout(client.math[id][3])
            delete client.math[id]
            await client.sendSticker(m.chat, await Func.fetchBuffer('./media/sticker/true.webp'), m, {
               packname: global.db.setting.sk_pack,
               author: global.db.setting.sk_author
            }).then(() => {
               client.reply(m.chat, Func.texted('bold', `+ ${Func.formatNumber(reward)} Point`), m)
            })
         } else {
            if (--client.math[id][2] == 0) {
               clearTimeout(client.math[id][3])
               await client.sendSticker(m.chat, await Func.fetchBuffer('./media/sticker/false.webp'), m, {
                  packname: global.db.setting.sk_pack,
                  author: global.db.setting.sk_author
               }).then(() => {
                  client.reply(m.chat, `🚩 _Game over karena sudah 3 kali salah menjawab, jawabannya adalah_ : *${client.math.result[id][1]}*`, m).then(() => delete client.math[id])
               })
            } else {
               if (users.point == 0) return client.sendSticker(m.chat, await Func.fetchBuffer('./media/sticker/false.webp'), m, {
                  packname: global.db.setting.sk_pack,
                  author: global.db.setting.sk_author
               })
               users.point < reward ? users.point = 0 : users.point -= reward
               await client.sendSticker(m.chat, await Func.fetchBuffer('./media/sticker/false.webp'), m, {
                  packname: global.db.setting.sk_pack,
                  author: global.db.setting.sk_author
               }).then(() => {
                  client.reply(m.chat, `*- ${Func.formatNumber(reward)} Point*`, m)
               })
            }
         }
      }
   } catch (e) {
      console.log(e)
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   error: false,
   group: true,
   game: true
}, __filename)