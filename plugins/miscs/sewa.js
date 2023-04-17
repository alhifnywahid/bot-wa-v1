neoxr.create(async (m, {
   client,
   Func
}) => {
      try {
        var p = `*❏ SEWABOT*

Jika kamu ingin memasukkan bot ke grup kamu, kamu hanya perlu membayar 5k durasi 1 bulan.
    
Pembayaran via GOPAY, DANA, SHOPEEPAY dan OVO.

Untuk lebih lanjut silahkan chat ke https://wa.me/6285936173955 atau kamu bisa ketik *.owner*`
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
