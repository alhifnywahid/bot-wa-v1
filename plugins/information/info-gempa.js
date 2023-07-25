const api = require("caliph-api");
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   isBotAdmin,
   Func
}) => {
   try {
      client.sendReact(m.chat, '🕒', m.key)
      let jo = await api.info.gempa()
      let sout = '*么   I N F O - G E M P A*\n\n'
      sout += '➠ *tanggal* : ' + jo.result.tanggal + '\n'
      sout += '➠ *jam* : ' + jo.result.jam + '\n'
      sout += '➠ *lintang* : ' + jo.result.lintang + '\n'
      sout += '➠ *bujur:* : ' + jo.result.bujur + '\n'
      sout += '➠ *magnitude* : ' + jo.result.magnitude + '\n'
      sout += '➠ *kedalaman* : ' + jo.result.kedalaman + '\n'
      sout += '➠ *potensi* : ' + jo.result.potensi + '\n'
      sout += '➠ *wilayah* : ' + jo.result.wilayah + '\n\n'
      sout += global.footer
      client.sendFile(m.chat, jo.result.image, "", sout, m);
   } catch (e) {
      client.reply(m.chat, e, m)
      console.log(e)
   }
}, {
   usage: ['infogempa'],
   hidden: [],
   use: '',
   category: 'information',
   group: false,
   premium: true
}, __filename)
