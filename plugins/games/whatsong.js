neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.whatsong = client.whatsong ? client.whatsong : {}
      let id = m.chat,
         timeout = 120000
      if (id in client.whatsong) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.whatsong[id][0])
      let json = await Func.jsonRandom('./media/json/whatsong.json')
      let teks = `乂  *W H A T S O N G*\n\n`
      teks += `Apa judul dari lagu berikut ini ?\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}songclue* untuk bantuan dan *${prefix}songskip* untuk menghapus sesi.`
      client.whatsong[id] = [
         await client.reply(m.chat, teks, m),
         json,
         await client.sendFile(m.chat, await Func.fetchBuffer(json.link_song), '', '', m, { ptt: true }),
         setTimeout(() => {
            if (client.whatsong[id]) client.reply(m.chat, `*Waktu habis!*`, client.whatsong[id][0])
            delete client.whatsong[id]
         }, timeout)
      ]
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   }, {
   usage: ['whatsong'],
   hidden: ['tebaklagu'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)