neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.tebaklirik = client.tebaklirik ? client.tebaklirik : {}
      let id = m.chat,
         timeout = 60000
      if (id in client.tebaklirik) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.tebaklirik[id][0])
      let json = await Func.jsonRandom ('./media/json/lirik.json')
      let teks = `乂  *T E B A K  L I R I K*\n\n`
      teks += `${json.soal}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}lirikclue* untuk bantuan dan *${prefix}lirikskip* untuk menghapus sesi.`
      client.tebaklirik[id] = [
         await client.reply(m.chat, teks, m),
         json,
         setTimeout(() => {
            if (client.tebaklirik[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.jawaban}*`, client.tebaklirik[id][0])
            delete client.tebaklirik[id]
         }, timeout)
      ]
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   }, {
   usage: ['whatlyric'],
   hidden: ['tebaklirik'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)