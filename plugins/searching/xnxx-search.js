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
    let jo = await fg.xnxxSearch(text)
     client.reply(m.chat, jo, m)
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['xnxxsearch'],
  use: ['query'],
  category: 'searching',
  premium: false,
  private: false,
  owner: false,
  limit: 1,
}, __filename);



