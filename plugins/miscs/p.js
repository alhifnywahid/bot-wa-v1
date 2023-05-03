neoxr.create(async (m, {
   client,
   Func
}) => {
  try {
    await client.sendSticker(m.chat, await Func.fetchBuffer('./media/sticker/p.webp'), m, {
      packname: global.db.setting.sk_pack,
      author: global.db.setting.sk_author
   })
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  hidden: ['p'],
  error: false,
}, __filename)
