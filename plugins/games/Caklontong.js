neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.caklontong = client.caklontong ? client.caklontong : {}
      let id = m.chat,
         timeout = 60000
      if (id in client.caklontong) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.caklontong[id][0])
      let json = await Func.jsonRandom ('./media/json/caklontong.json')
      let teks = `乂  *C A K  L O N T O N G*\n\n`
      teks += `${json.soal}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}cakclue* untuk bantuan dan *${prefix}cakskip* untuk menghapus sesi.`
      client.caklontong[id] = [
         await client.reply(m.chat, teks, m),
         json,
         setTimeout(() => {
            if (client.caklontong[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.jawaban}*\nPenjelasan : *${json.deskripsi}*`, client.caklontong[id][0])
            delete client.caklontong[id]
         }, timeout)
      ]
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
    
   }, {
   usage: ['caklontong'],
   hidden: [''],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)