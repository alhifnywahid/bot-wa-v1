const dhn_api = require("dhn-api");
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   Func
}) => {
   try {
      const API = await dhn_api.Quotes();
      let quotes = '*么  Q U O T E S*\n\n'
      quotes += 'Author : ' + API.author + '\n'
      quotes += 'Quotes : ' + API.quotes + '\n\n'
      quotes += Func.texted('bold', 'Simlple WhatsApp Bot by GOPRET')
      client.reply(m.chat, quotes, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['quotes'],
   category: 'a new feature',
   premium: true,
   limit: 1,
}, __filename);
