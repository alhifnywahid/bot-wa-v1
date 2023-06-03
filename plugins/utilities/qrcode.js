const { toDataURL } = require("qrcode") 
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   Func
}) => {
   try {
    if (!text) return client.reply(m.chat, Func.example(prefix, command, 'p mabar'), m)
    let sout = await toDataURL(text.slice(0, 2048), { scale: 8 })
    client.sendFile(m.chat, sout, 'qrcode.png"', `noh kak`, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['qrcode'],
   use: 'query',
   category: 'utilities',
   limit: 1,
}, __filename)
