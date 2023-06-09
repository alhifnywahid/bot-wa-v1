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
    let res = await fetch.default(`https://api-fgmods.ddns.net/api/img/girl?apikey=47cc4a9e`);
    let buffer = await res.buffer();
    client.sendFile(m.chat, buffer, '', '', m);
  } catch (e) {
    client.reply(m.chat, Func.jsonFormat(e), m);
  }
}, {
  usage: ['girl'],
  category: 'a new feature',
  premium: true,
  limit: 1,
}, __filename);
