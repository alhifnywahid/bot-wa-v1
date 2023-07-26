const api = require("caliph-api");
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   Func
}) => {
   try {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, 'surabaya'), m)
      client.sendReact(m.chat, '🕒', m.key)
      let jo = await api.search.cuaca(text)
      if (jo.status == 404) return client.reply(m.chat, 'Kota yang anda cari tidak di temukan!', m)
      let sout = '*么   INFO - CUACA*\n\n'
      sout += '➭ *Kota* : ' + jo.data.Nama + '\n'
      sout += '➭ *Longitude* : ' + jo.data.Longitude + '\n'
      sout += '➭ *Latitude* : ' + jo.data.Latitude + '\n'
      sout += '➭ *Suhu* : ' + jo.data.Suhu + '\n'
      sout += '➭ *Angin* : ' + jo.data.Angin + '\n'
      sout += '➭ *Kelembapan* : ' + jo.data.Kelembaban + '\n'
      sout += '➭ *Cuaca* : ' + jo.data.Cuaca + '\n'
      sout += '➭ *Keterangan* : ' + jo.data.Keterangan + '\n'
      sout += '➭ *Udara* : ' + jo.data.Udara + '\n\n'
      sout += global.footer
      client.reply(m.chat, sout, m)
   } catch (e) {
      client.reply(m.chat, '*Maaf fitur ini mungkin sedang eror!, Silahkan hubungi owner.*', m)
      console.log(e)
   }
}, {
   usage: ['infocuaca'],
   hidden: [],
   use: 'city',
   category: 'information',
   group: false,
   premium: true
}, __filename)
