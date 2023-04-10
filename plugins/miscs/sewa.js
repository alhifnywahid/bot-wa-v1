neoxr.create(async (m, {
   client,
   Func
}) => {
      try {
        var p = `*❏ SEWABOT*

Jika kamu ingin memasukkan bot ke grup kamu, kamu hanya perlu membayar 15k durasi 1 bulan.
    
Pembayaran via Gopay, DANA dan OVO.

Untuk lebih lanjut silahkan chat ke https://wa.me/6281310994964 atau kamu bisa ketik *.owner*`
   client.sendMessageModify(m.chat, p, m, {
   title: global.botname,
   ads: false,
   largeThumb: true,
   thumbnail: await Func.fetchBuffer(global.db.setting.cover),
   url: global.db.setting.link
})
  } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['sewa'],
   hidden: ['sewabot'],
   category: 'miscs'
}, __filename)