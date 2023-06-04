const ds = require('dandi-api');
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   Func
}) => {
   try {
    if (!text) return client.reply(m.chat, Func.example(prefix, command, 'neraka'), m)
    client.sendReact(m.chat, '🕒', m.key)
    let data = await ds.TafsirSurah(text);
    let final = '*么  T A F S I R - Q U R \' A N*\n\n'
    data.forEach(item => {
        final += '➠ *Surah* : ' + item.surah + '\n'
        final += '➠ *Tafsir* : ' + item.tafsir + '\n'
        final += '➠ *Sumber* : ' + item.source + '\n\n'
        final += Func.texted('bold', 'Simlple WhatsApp Bot by GOPRET')
    });
    client.reply(m.chat, final, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['tafsir'],
   use: 'query',
   category: 'islamic',
   limit: 1,
}, __filename);
