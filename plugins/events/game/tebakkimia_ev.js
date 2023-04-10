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
         client.tebakkimia = client.tebakkimia ? client.tebakkimia : {}
         if (m.quoted && m.quoted.sender != client.decodeJid(client.user.id)) return
         if (m.quoted && /kimiaskip/i.test(m.quoted.text) && user.point < 100000) {
            if (!(id in client.tebakkimia) && /kimiaskip/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `🚩 Soal tersebut telah berakhir, silahkan kirim _${prefixes[0]}tebakkimia_ untuk mendapatkan soal baru.`), m)
            if (m.quoted.id == client.tebakkimia[id][0].key.id) {
               let json = JSON.parse(JSON.stringify(client.tebakkimia[id][1]))
               if (['Timeout', ''].includes(body)) return !0
               if (body.toLowerCase() == json.lambang.toLowerCase()) {
                  await client.sendSticker(m.chat, await Func.fetchBuffer('./media/sticker/true.webp'), m, {
                     packname: global.db.setting.sk_pack,
                     author: global.db.setting.sk_author
                  }).then(() => {
                     client.reply(m.chat, `*+ ${Func.formatNumber(reward)} Point*`, m)
                     users.point += reward
                     clearTimeout(client.tebakkimia[id][2])
                     delete client.tebakkimia[id]
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