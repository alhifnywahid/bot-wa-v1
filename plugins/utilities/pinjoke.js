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
    if (!text) return client.reply(m.chat, Func.example(prefix, command, 'kucing'), m)
        client.sendReact(m.chat, '🕒', m.key)
        let old = new Date()
        let json = await ds.Pinterest(text)
        if (!json.status) return client.reply(m.chat, global.status.fail, m)
        for (let i = 0; i < 3; i++) {
          var rand = Math.floor(json.data.length * Math.random())
          client.sendFile(m.chat, json.data[rand].url, '', `🍟 *Fetching* : ${((new Date - old) * 1)} ms`, m)
          await Func.delay(2000)
    }
  } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['pinjoke'],
  use: 'query',
  category: 'utilities',
  limit: 1,
  premium: true
}, __filename);
