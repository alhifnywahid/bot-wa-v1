neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.whatpic = client.whatpic ? client.whatpic : {}
      let id = m.chat,
         timeout = 120000
      if (id in client.whatpic) {
         return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.whatpic[id][0])
      } else {
         let json = Func.jsonRandom('./media/json/whatpic.json')
         let teks = `乂  *W H A T P I C*\n\n`
         teks += `${json.deskripsi}\n\n`
         teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
         teks += `Reply pesan ini untuk menjawab, kirim *${prefix}picclue* untuk bantuan dan *${prefix}picskip* untuk menghapus sesi.`
         client.whatpic[id] = [
            await client.sendMessageModify(m.chat, teks, m, {
               thumbnail: json.img,
               largeThumb: true
            }),
            json,
            setTimeout(async () => {
               const msg = await store.loadMessage(m.chat, client.whatpic[id][0])
               if (client.whatpic[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.jawaban}*`, client.whatpic[id][0])
               delete client.whatpic[id]
            }, timeout)
         ]
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   }, {
   usage: ['whatpic'],
   hidden: ['tebakgambar'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)