const hispamemes = require("hispamemes")
neoxr.create(async (m, {
  command,
  text,
  prefix,
  client,
  args,
  Func
}) => {
   try {
    const meme = hispamemes.meme()
    client.sendFile(m.chat, meme, m)
  } catch (e) {
    client.reply(m.chat, e, m)
    console.log(e)
  }
}, {
  usage: ['meme'],
  category: 'utilities',
  limit: 1,
  premium: true
}, __filename);
