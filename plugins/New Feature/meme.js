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
      console.log(e)
      return client.reply(m.chat, Func.texted('bold', e.message), m)
   }
}, {
   usage: ['meme'],
   category: 'a new feature',
   premium: true,
   limit: true
}, __filename)
