const { wikipedia } = require('@bochilteam/scraper')
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   Func
}) => {
   try {
    if (!text) client.reply(m.chat, Func.example(prefix, command, 'penemu lampu?'), m)
    let json = await wikipedia(text)
    let sout = json.title + '\n'
    sout += json.img + '\n'
    sout += json.articles + '\n'
    await client.reply(m.chat, sout.trim(), m)
   } catch (e) {
      client.reply(m.chat, e, m)
      console.log(e)
   }
}, {
   usage: ['wikipedia'],
   use: 'query',
   category: 'a new feature',
   limit: 1,
}, __filename)
