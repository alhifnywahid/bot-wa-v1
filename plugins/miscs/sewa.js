neoxr.create(async (m, {
   client,
   Func
}) => {
      try {
         let teks = '*么 S E W A  B O T*\n\n'
         teks += '*HARGA*\n'
         teks += '◦ 5.000 Ribu selama 1 bulan.\n\n'
         teks += '*PEMBAYARAN YANG TERSEDIA*\n'
         teks += '◦ Ewallet = Dana, Ovo, Gopay, Shopeepay & link Aja.\n'
         teks += '◦ Bank = Tersedia Semua Bank.\n'
         teks += '◦ Qris = Tersedia Semua Qris.\n'
         teks += '◦ Pulsa = Xl & Indosat.\n\n'
         teks += 'Silahkan hubungi *.owner* untuk melakukan pembelian premium.'
   client.sendMessageModify(m.chat, teks, m, {
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
