neoxr.create(async (m, {
   client,
   Func
}) => {
      try {
   client.sendMessageModify(m.chat, rule(), m, {
   title: ('Instagram : @megachanbot'),
   ads: false,
   largeThumb: true,
   thumbnail: await Func.fetchBuffer('https://telegra.ph/file/1b61fb7b5158bcaaf5442.jpg'),
   url: global.db.setting.link
})
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['rules'],
   hidden: ['rl'],
   category: 'miscs'
}, __filename)

const rule = () => { 
   let final = '*么 R U L E S - B O T*\n\n'
   final += '➠ Data user, grup, dan chat akan otomatis terhapus jika tidak ada aktivitas yang terdeteksi selama 7 hari (alasan: pembersihan database).\n'
   final += '➠ Pengguna gratis mendapatkan 15 / hari dan akan direset setelah 12 jam.\n'
   final += '➠ Jangan spam, jeda setiap penggunaan perintah selama 3 detik.\n'
   final += '➠ Jangan melakukan panggilan suara atau video (Telepon & Video Call), jika Anda melakukannya akan diblokir.\n'
   final += '➠ Jangan toxic ke bot karena kalian akan mendapatkan sanksi berupa banned dan block.\n'
   final += '➠ Jangan mencari & membuat konten dewasa (+18), misal: membuat stiker dari foto bugil atau mencari desahan ASMR.\n'
   final += '➠ Jika ingin membuka blokir dan unbanned, masing-masing akan dikenakan biaya sebesar Rp. 5.000.\n'
   final += '➠ Spammer akan secara permanen dilarang untuk pengguna gratis dan premium (+ tidak ada pengembalian uang).\n'
   final += '➠ Semua Syarat & Ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.\n'
return final
}
