neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.riddle = client.riddle ? client.riddle : {}
      let id = m.chat,
         timeout = 60000
      if (id in client.riddle) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.riddle[id][0])
      let json = await Api.tekateki()
      let teks = `乂  *R I D D L E*\n\n`
      teks += `${json.data.pertanyaan}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}clue* untuk bantuan dan *${prefix}ridskip* untuk menghapus sesi.`
      client.riddle[id] = [
         await client.reply(m.chat, teks, m),
         json.data,
         setTimeout(() => {
            if (client.riddle[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.data.jawaban}*`, client.riddle[id][0])
            delete client.riddle[id]
         }, timeout)
      ]
     } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   }, {
   usage: ['riddle'],
   hidden: ['tekateki'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)