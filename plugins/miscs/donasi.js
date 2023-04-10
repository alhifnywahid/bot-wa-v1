neoxr.create(async (m, {
   client,
   Func
}) => {
      try {
        client.sendReact(m.chat, '❤️', m.key)
   client.sendMessageModify(m.chat, donasi(), m, {
   title: ('Instagram : @luthfijoestars'),
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

➠ DANA/OVO/GOPAY: 081310994964
➠ Pulsa: 087740938972
➠ Saweria: https://saweria.co/zephyrboy


Terimakasih, dengan berkah mu owner dapat meningkatkan performa ${global.botname}`
}