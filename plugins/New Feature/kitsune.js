const dh = require("discord-hentai");

neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    client.sendReact(m.chat, '🕒', m.key)
    const result = await dh.Anime.kitsune();
    client.sendFile(m.chat, result, '', `*Dosa tanggung sendiri!*`, m)
  } catch (e) {
    client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['kitsune'],
  category: 'a new feature',
  premium: true,
  limit: 1,
}, __filename);
