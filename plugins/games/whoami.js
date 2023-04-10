neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.whoami = client.whoami ? client.whoami : {}
      let id = m.chat,
         timeout = 30000
      if (id in client.whoami) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.whoami[id][0])
      let json = await Api.whoami()
      let teks = `乂  *W H O A M I*\n\n`
      teks += `${json.data.pertanyaan}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}who* untuk bantuan dan *${prefix}whoskip* untuk menghapus sesi.`
      client.whoami[id] = [
         await client.reply(m.chat, teks, m),
         json.data,
         setTimeout(() => {
            if (client.whoami[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.data.jawaban}*`, client.whoami[id][0])
            delete client.whoami[id]
         }, timeout)
      ]
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   }, {
   usage: ['whoami'],
   hidden: ['siapakahaku'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)