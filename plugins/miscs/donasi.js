neoxr.create(async (m, {
   client,
   Func
}) => {
      try {
        client.sendReact(m.chat, '❤️', m.key)
   client.sendMessageModify(m.chat, donasi(), m, {
   title: ('Instagram : @megachanbot'),
   ads: false,
   largeThumb: true,
   thumbnail: await Func.fetchBuffer('https://telegra.ph/file/e1e4f12fb71c5e36444e4.jpg'),
   url: global.db.setting.link
})
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['donate'],
   hidden: ['donasi'],
   category: 'miscs'
}, __filename)

const donasi = () => { 
return `❏ *DONATE*

Berapapun donasi mu akan sangat 
berarti untuk kami,

Metode Pembayaran:

➠ DANA/OVO/GOPAY: 085655207366
➠ Pulsa: 085936173955
➠ Saweria: https://saweria.co/megachanbot

Terimakasih, dengan berkah mu owner dapat meningkatkan performa ${global.botname}`
}
