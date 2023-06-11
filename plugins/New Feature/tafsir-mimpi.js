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
      if (res.status == false) return console.log("cari lain");
      let artiMimpi = res.message.arti;
      let artiMimpiArray = artiMimpi.split('.');
      let final = '*么  T A F S I R - M I M P I*\n\n'
      artiMimpiArray.forEach((arti, index) => {
        if (arti.trim() !== '') {
          final += ' ◦ ' + arti.trim() + '\n'
        }
      });
      final += '\n\n' + Func.texted('bold', 'Simlple WhatsApp Bot by GOPRET')
      console.log(final)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['tafsirmimpi'],
  use: MediaQueryList,
  category: 'a new feature',
  premium: true,
  limit: 1,
}, __filename);
