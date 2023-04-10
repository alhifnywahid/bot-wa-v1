neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
 if (global.db.users.find(v => v.jid == m.sender).point > 100000) return client.reply(m.chat, Func.texted('bold', `🚩 Maaf kamu tidak bisa memainkan games ini karena pointmu telah mencapai batas maksimum.`), m)
      let id = m.chat,
         timeout = 60000
      if (id in client.whatword) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.whatword[id][0])
      let json = await Api.whatword()
      let teks = `乂  *W H A T W O R D*\n\n`
      teks += `${json.data.pertanyaan}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} minutes* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}wordclue* untuk bantuan dan *${prefix}wordskip* untuk menghapus sesi.`
      client.whatword[id] = [
         await client.reply(m.chat, teks, m),
         json.data,
         setTimeout(() => {
            if (client.whatword[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.data.jawaban}*`, client.whatword[id][0])
            delete client.whatword[id]
         }, timeout)
      ]
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   }, {
   usage: ['whatword'],
   hidden: ['tebakkata'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)