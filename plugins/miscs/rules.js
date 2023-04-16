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
return `
❏ INFO 
• Ketik .menu untuk melihat info bot
• Group ini berisi SPAM CHAT
• Matikan autodownload media untuk menghemat data/kuota
• Limit reset otomatis setiap jam 00:00
• Jumlah limit harian 10 Dan Limit game 5
• Mau beli premium? Ketik .premium
• Kalo mau beli limit pake point beli secukupnya aja, soalnya kalo buyall nanti percuma limitnya ke reset lagi otomatis jam 12 malam

❏ RULES 
• Jangan ada bot lain ! AutoKick
• Jangan kirim gc lain ! Autokick
• ANTI LINK ON ! Kirim link Autokick
• Jangan spam stiker 
• Jangan bikin rusuh
• Harus saling menghargai
• Jangan spam bot (Jeda setiap penggunaan perintah adalah 3 detik) ngeyel spam? = banned 30 menit | 3 Kali kena banned 30min? = Banned permanen 
• Jangan kirim virtex/BUG
• Dilarang keras rasis !
• Jangan toxic berlebihan !
• Masuk sini minimal ngerti cara pake bot !
• Kirim 18+ AutoKick
• Menggunakan kata toxic yang dilist = +1 warning
5 Warning = Kick

Nomer Bot | wa.me/6285936173955
Group Official | https://chat.whatsapp.com/JpO7oMMgK975NMhJA7Qrnj
Group Khusus Game | https://chat.whatsapp.com/HfbVjUdEIjY0Wg7FsYZIoj
`
}

