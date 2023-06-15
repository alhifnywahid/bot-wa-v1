const { Primbon } = require('scrape-primbon')

neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    const primbon = new Primbon()
    primbon.tafsir_mimpi(text).then((res) => {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, 'bertemu ular'), m)
      if (res.status == false) return client.reply(m.chat, '*Tafsir tidak di temukan!*', m)
      let artiMimpi = res.message.arti;
      let artiMimpiArray = artiMimpi.split('.');
      let final = '*么  T A F S I R - M I M P I*\n\n'
      artiMimpiArray.forEach((arti, index) => {
        if (arti.trim() !== '') {
          final += ' ◦ ' + arti.trim() + '\n'
        }
      });
      final += '\n\n' + Func.texted('bold', 'Simlple WhatsApp Bot by GOPRET')
     client.reply(m.chat, final, m)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['tafsirmimpi'],
  use: 'query',
  category: 'primbon',
  premium: true,
  limit: 1,
}, __filename);
