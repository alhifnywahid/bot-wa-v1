neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.tebaktebakan = client.tebaktebakan ? client.tebaktebakan : {}
     if (global.db.users.find(v => v.jid == m.sender).point > 100000) return client.reply(m.chat, Func.texted('bold', `🚩 Maaf kamu tidak bisa memainkan games ini karena pointmu telah mencapai batas maksimum.`), m)
      let id = m.chat,
         timeout = 60000
      
      if (id in client.tebaktebakan) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.tebaktebakan[id][0])
      let json = await Func.jsonRandom ('./media/json/tebak.json')
      let teks = `乂  *T E B A K  T E B A K A N*\n\n`
      teks += `${json.soal}\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${prefix}tebakclue* untuk bantuan dan *${prefix}tebakskip* untuk menghapus sesi.`
      client.tebaktebakan[id] = [
         await client.reply(m.chat, teks, m),
         json,
         setTimeout(() => {
            if (client.tebaktebakan[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.jawaban}*`, client.tebaktebakan[id][0])
            delete client.tebaktebakan[id]
         }, timeout)
      ]
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   }, {
   usage: ['susunkata'],
   hidden: [''],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)