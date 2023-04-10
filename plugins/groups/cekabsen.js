neoxr.create(async (m, {
   client,
   prefix,
   command,
   Func
}) => {
   try {
      let id = m.chat
      client.absen = client.absen ? client.absen : {}
      if (!(id in client.absen)) return client.reply(m.chat, Func.texted('bold', `🚩 Absen tidak sedang berlangsung, untuk memulai absen silahkan kirim ${prefix}absen`), m)
      let absen = client.absen[id][1]
      let d = new Date
      let date = d.toLocaleDateString('id', {
         day: 'numeric',
         month: 'long',
         year: 'numeric'
      })
      let teks = `❏  *A B S E N*\n\n`
      teks += `Tanggal : ${date}, Total : ${absen.length}\n\n`
      teks += absen.map((v, i) => `➠  @${v.split`@`[0]}`).join('\n')
      teks += `\n\nSilahkan kirim *${prefix}hadir* untuk absen kehadiran dan *${prefix}cekabsen* untuk mengecek absen.`
      client.reply(m.chat, teks, m)
   
} catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['cekabsen'],
   category: 'group',
   group: true
}, __filename)