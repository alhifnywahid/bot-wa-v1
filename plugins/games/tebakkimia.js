neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.tebakkimia = client.tebakkimia ? client.tebakkimia : {}
if (global.db.users.find(v => v.jid == m.sender).point > 100000) return client.reply(m.chat, Func.texted('bold', `🚩 Maaf kamu tidak bisa memainkan games ini karena pointmu telah mencapai batas maksimum.`), m)
      let id = m.chat,
         timeout = 60000
      if (id in client.tebakkimia) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.tebakkimia[id][0])
      let json = await Func.jsonRandom ('./media/json/kimia.json')
      let teks = `乂  *T E B A K  K I M I A*\n\n`
      teks += `Lambang unsur ${json.unsur} dalam tabel periodik adalah\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}kimiaclue* untuk bantuan dan *${prefix}kimiaskip* untuk menghapus sesi.`
      client.tebakkimia[id] = [
         await client.reply(m.chat, teks, m),
         json,
         setTimeout(() => {
            if (client.tebakkimia[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.lambang}*`, client.tebakkimia[id][0])
            delete client.tebakkimia[id]
         }, timeout)
      ]
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
    
   }, {
   usage: ['whatkimia'],
   hidden: ['tebakkimia'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)