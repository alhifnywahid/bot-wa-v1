neoxr.create(async (m, {
   client,
   prefix,
   participants,
   command,
   Func
}) => {
     try {
      let id = m.chat
      let member = participants.map(v => v.id)
      client.absen = client.absen ? client.absen : {}
      if (id in client.absen) return client.reply(m.chat, Func.texted('bold', `^ absen sebelumnya belum diselesaikan.`), client.absen[id][0])
      client.absen[id] = [
         await client.reply(m.chat, Func.texted('bold', `Ayo absen dulu adik-adik ketik ${prefix}hadir, yang sering bolos nanti ganaik kelas.`), null, {
             mentions: member
             }),
         [],
         setTimeout(() => {
            if (client.absen[id]) {
               if (client.absen[id][1].length == 0) {
                  client.reply(m.chat, Func.texted('bold', `🚩 15 menit berlalu, absen selesai dan tidak ada yang hadir.`), client.absen[id][0])
               } else {
                  let d = new Date
                  let date = d.toLocaleDateString('id', {
                     day: 'numeric',
                     month: 'long',
                     year: 'numeric'
                  })
                  let teks = `❏  *A B S E N*\n\n`
                  teks += `Tanggal : ${date}, Total : ${client.absen[id][1].length}\n\n`
                  teks += client.absen[id][1].map((v, i) => ` ➠  @${v.split`@`[0]}`).join('\n')
                  teks += `\n\n15 menit berlalu, sesi absen telah selesai.`
                  client.reply(m.chat, teks, client.absen[id][0])
               }
            }
            delete client.absen[id]
         }, 900_000)
      ]
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['absen'],
   category: 'group',
   admin: true,
   group: true
}, __filename)