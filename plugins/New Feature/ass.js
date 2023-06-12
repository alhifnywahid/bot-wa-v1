const akaneko = require('akaneko');
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
    for (let i = 0; i < 3; i++){
      client.sendFile(m.chat, await akaneko.nsfw.ass(), '', `*DOSA TANGGUNG SENDIRI!*`, m)
    }
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['nsfw-ass'],
  category: 'a new feature',
  premium: true,
  private: true,
  owner: false,
  limit: 1,
}, __filename);
