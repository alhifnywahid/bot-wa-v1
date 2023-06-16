const fg = require('api-dylux');
neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
  try {
    fg.xnxxSearch(text)
        .then(data => {client.reply(m.chat, data, m)
    });
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['vicsearch'],
  use: ['query'],
  category: 'a new feature',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);
