neoxr.create(async (m, {
   client,
   users,
   Func
}) => {
   try {
      let timeClaim = 86400000
      let claimed = new Date(users.lastclaim + timeClaim)
      let timeout = claimed - new Date()
      let point = 5000
      if (new Date - users.lastclaim > timeClaim) {
         client.reply(m.chat, `Selamat *${m.pushName}* Kamu mendapat +${Func.formatNumber(point)} Points dari claim harian\n\nCek level kamu menggunakan command .level`, m)
         users.point += point
         users.lastclaim = new Date() * 1
      } else {
         client.reply(m.chat, `Kamu sudah claim harian sebelumnya, datang lagi besok untuk melakukan claim harian\n\n*Timeout : [ ${Func.toTime(timeout)} ]*`, m)
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['claim'],
   category: 'user info'
}, __filename)