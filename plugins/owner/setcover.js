neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Scraper,
   Func
}) => {
  let setting = global.db.setting
  try {
     let q = m.quoted ? m.quoted : m
     let mime = (q.msg || q).mimetype || ''
     if (!/image/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Image not found.`), m)
     client.sendReact(m.chat, '🕒', m.key)
     let img = await q.download()
     if (!img) return client.reply(m.chat, global.status.wrong, m)
     let link = await Scraper.uploadFile(img)
     if (!link.status) return m.reply(Func.jsonFormat(link))
     setting.cover = link.data.url
     client.reply(m.chat, Func.texted('bold', `🚩 Cover successfully set.`), m)
  } catch (e) {
     return client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['sco'],
  hidden: ['coper'],
  use: 'reply foto',
  category: 'owner',
  owner: true
}, __filename)
