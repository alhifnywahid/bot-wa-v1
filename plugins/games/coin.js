neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   users,
   Func
}) => {
   try {
      if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'A'), m)
      if (users.point == 0) return client.reply(m.chat, Func.texted('bold', `🚩 Anda tidak memiliki poin untuk memainkan game ini.`), m)
      if (users.point < 300000) return client.reply(m.chat, Func.texted('bold', `🚩 Untuk memainkan game ini, Anda harus memiliki setidaknya 300 ribu poin.`), m)
      let x = Func.ucword(args[0])
      if (x == 'A' || x == 'B') {
         var type = Func.random(['A', 'B'])
         if (Func.ucword(args[0]) == type) {
            let percent = Func.randomInt(1, 5)
            let reward = ((percent / 200) * users.point)
            users.point += reward
            let last = users.point
            let teks = `乂  *W I N*\n\n`
            teks += `	*System* : ${type}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*+ ${Func.formatNumber(reward)}*\n\n`
            teks += `• *Total* : ${Func.formatNumber(last)} Point\n\n`
            teks += `*NB : “tunggu ${global.cooldown} detik untuk perintah berikutnya.”*`
            client.reply(m.chat, teks, m)
         } else if (Func.ucword(args[0]) != type) {
            let percent = Func.randomInt(1, 10)
            let reward = ((percent / 200) * users.point)
            users.point -= reward
            let last = users.point
            let teks = `乂  *L O S E*\n\n`
            teks += `	*System* : ${type}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*- ${Func.formatNumber(reward)}*\n\n`
            teks += `• *Total* : ${Func.formatNumber(last)} Point\n\n`
            teks += `*NB : "tunggu ${global.cooldown} detik untuk perintah berikutnya.”*`
            client.reply(m.chat, teks, m)
         }
      } else {
         return client.reply(m.chat, Func.texted('bold', `🚩 Hanya A dan B Kids.`), m)
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['coin'],
   use: 'A / B',
   category: 'games',
   limit: true,
   game: true,
   group: true
}, __filename)
