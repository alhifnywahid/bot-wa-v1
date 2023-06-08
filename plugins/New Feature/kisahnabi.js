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
         client.sendReact(m.chat, '🕒', m.key)
         let input = text.toLowerCase();
         let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${input}.json`)
         let kisah = await url.json().catch(_ => "Error")
         if (kisah == "Error") throw "Kisah Nabi yang anda cari tidak ada!"
         let hasil = '*么  K I S A H - N A B I*\n\n'
         hasil += '➠ *Nabi : *' + kisah.name + '\n'
         hasil += '➠ *Tanggal Lahir *: ' + kisah.thn_kelahiran + '\n'
         hasil += '➠ *Tempat Lahir : *' + kisah.tmp + '\n'
         hasil += '➠ *Usia : *' + kisah.usia + '\n\n'
         hasil += '➠ *Kisah* : ' + kisah.description
         client.reply(m.chat, hasil, m)
  } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['kisahnabi'],
   use: 'query',
   category: 'a new feature',
   limit: 1,
}, __filename)
