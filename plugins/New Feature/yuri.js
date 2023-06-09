const fetch = require("node-fetch");
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   Func
}) => {
   try {
      let res = await fetch.default(`https://api-fgmods.ddns.net/api/nsfw-nime/yuri?apikey=47cc4a9e`);
      client.sendReact(m.chat, '🕒', m.key)
      client.sendFile(m.chat, res, '', ``, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['yuri'],
   category: 'a new feature',
   premium: true,
   limit: 1,
}, __filename);




