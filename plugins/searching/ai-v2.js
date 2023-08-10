const cgpt = require('chatgpt-scraper');
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   Func
}) => {
   try {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, 'siapa itu megawati?'), m)
      client.sendReact(m.chat, '🕒', m.key)
      const input = await cgpt.ChatGpt(text)
      const output = input.response
      client.reply(m.chat, output, m)
   } catch (e) {
      client.reply(m.chat, '*Maaf fitur ini mungkin sedang eror!, Silahkan hubungi owner.*', m)
      console.log(e)
   }
}, {
   cache: true,
   usage: ['ai2'],
   use: 'query',
   category: 'searching',
}, __filename)
