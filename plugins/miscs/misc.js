neoxr.create(async (m, {
   client,
   command,
   Func,
   Scraper
}) => {
   try {
      if (command == 'runtime' || command == 'run') return m.reply(`*Running for : [ ${Func.toTime(process.uptime() * 1000)} ]*`)
      if (command == 'server') {
         const json = await Func.fetchJson('http://ip-api.com/json')
         client.reply(m.chat, Func.jsonFormat(json), m)
      }
      if (/check(api)?/.test(command)) {
         let json = await Api.check()
         await client.reply(m.chat, Func.jsonFormat(json), m)
      }
      if (command == 'owner') return client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m).then(() => m.reply('*KONTAK INI KHUSUS UNTUK TRANSAKSI PEMBELIAN PREMIUM DAN UNBLOK/UNBAN, DI LUAR DARI ITU TIDAK AKAN DI RESPON.*'))
      if (command == 'tourl') {
         let q = m.quoted ? m.quoted : m     
         let mime = (q.msg || q).mimetype || ''
         if (!mime) return client.reply(m.chat, Func.texted('bold', `🚩 File not found!`), m)
         client.sendReact(m.chat, '🕒', m.key)
         const file = await q.download()
         const json = await Scraper.uploadImageV2(file)
         m.reply(Func.jsonFormat(json))
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['checkapi', 'runtime', 'server'],
   hidden: ['owner', 'api', 'run', 'tourl'],
   category: 'miscs'
}, __filename)