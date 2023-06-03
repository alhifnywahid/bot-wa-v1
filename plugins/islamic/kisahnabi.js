const fetch = require('node-fetch')
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   Func
}) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'sulaiman'), m)
         let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
         let kisah = await url.json().catch(_ => "Error")
         if (kisah == "Error") throw "*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital"
         
         let hasil = '*Nabi : *' + kisah.name + '\n'
         hasil += '*Tanggal Lahir *: ' + kisah.thn_kelahiran + '\n'
         hasil += '*Tempat Lahir : *' + kisah.tmp + '\n'
         hasil += '*Usia : *' + kisah.usia + '\n\n'
         hasil += '*— — — — — — — — [ K I S A H ] — — — — — — — —*\n'
         hasil += kisah.description
         client.reply(m.chat, hasil, m)
  } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['kisahnabi'],
   use: 'query',
   category: 'islamic',
   limit: 1,
}, __filename)
