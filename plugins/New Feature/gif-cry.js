const anime = require('anime-actions');
neoxr.create(async (m, { command, text, prefix, client, args, Func }) => {
  try {
    client.sendReact(m.chat, '🕒', m.key)
    anime.cry().then((hugAction) => {
      client.sendFile(m.chat, hugAction, '', ``, m)
    }).catch((e) => {
      client.reply(m.chat, Func.jsonFormat(e), m)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['gifcry'],
  category: 'a new feature',
  premium: true,
  limit: 1,
}, __filename);
