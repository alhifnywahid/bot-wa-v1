neoxr.create(async (m, {
  client,
  Scraper,
  Func
}) => {
  try {
     if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
        let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
        let q = m.quoted ? m.quoted.message[type] : m.msg
        if (/image/.test(type)) {
           let old = new Date()
           client.sendReact(m.chat, '🕒', m.key)
           let img = await client.downloadMediaMessage(q)
           let url = await Scraper.uploadImageV2(img)
           let output = await Func.fetchBuffer(`https://vihangayt.me/tools/toanime?url=${url.data.url}`)
           client.sendFile(m.chat, output, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
        } else client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
     } else {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!mime) return client.reply(m.chat, Func.texted('bold', `🚩 Reply photo.`), m)
        if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
        let old = new Date()
        client.sendReact(m.chat, '🕒', m.key)
        let img = await q.download()
        let url = await Scraper.uploadImageV2(img)
        let output = await Func.fetchBuffer(`https://vihangayt.me/tools/toanime?url=${url.data.url}`)
        client.sendFile(m.chat, output, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
     }
  } catch (e) {
     client.reply(m.chat, '*Maaf fitur ini mungkin sedang eror!, Silahkan hubungi owner.*', m)
     console.log(e)
  }
}, {
  cache: true,
  usage: ['toanime'],
  hidden: [],
  use: 'reply photo',
  limit: 2,
  category: 'artificial intelligence',
  premium: true
}, __filename)
