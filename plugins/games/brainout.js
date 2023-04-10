neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.brainout = client.brainout ? client.brainout : {}
      let id = m.chat,
         timeout = 60000
      if (id in client.brainout) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.brainout[id][0])
      let json = await Api.asahotak()
      let teks = `乂  *B R A I N O U T*\n\n`
      teks += `${json.data.pertanyaan}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}brainwhat* untuk bantuan dan *${prefix}brainskip* untuk menghapus sesi.`
      client.brainout[id] = [
         await client.reply(m.chat, teks, m),
         json.data,
         setTimeout(() => {
            if (client.brainout[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.data.jawaban}*`, client.brainout[id][0])
            delete client.brainout[id]
         }, timeout)
      ]
    } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
       }
   }, {
   usage: ['brainout'],
   hidden: ['asahotak'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)