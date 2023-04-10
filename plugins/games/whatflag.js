neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      client.whatflag = client.whatflag ? client.whatflag : {}
      let id = m.chat,
         timeout = 120000
      if (id in client.whatflag) {
         return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.whatflag[id][0])
      } else {
         let json = await Func.jsonRandom('./media/json/whatflag.json')
         let teks = `乂  *W H A T F L A G*\n\n`
         teks += `Apa nama negara yang menggunakan bendera ini ?\n\n`
         teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
         teks += `Reply pesan ini untuk menjawab, kirim *${prefix}flagclue* untuk bantuan dan *${prefix}flagskip* untuk menghapus sesi.`
         client.whatflag[id] = [
            await client.sendMessageModify(m.chat, teks, m, {
               thumbnail: json.img,
               largeThumb: true
            }),
            json,
            setTimeout(async () => {
               const msg = await store.loadMessage(m.chat, client.whatflag[id][0])
               if (client.whatflag[id]) client.reply(m.chat, `*Waktu habis!*\nJawaban : *${json.name}*`, client.whatflag[id][0])
               delete client.whatflag[id]
            }, timeout)
         ]
         }
      } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   
   }, {
   usage: ['whatflag'],
   hidden: ['tebakbendera'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)