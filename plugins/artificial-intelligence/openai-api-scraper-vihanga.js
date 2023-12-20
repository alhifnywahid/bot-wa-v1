neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   Func
 }) => {
  try {
   //client.reply(m.chat, "Fitur ai sedang eror! Silahkan pakai fitur bard dulu!!!", m)
   if (!text) return client.reply(m.chat, Func.example(prefix, command, 'siapa itu megawati?'), m)
   client.sendReact(m.chat, '🕒', m.key)
   let json = await Func.fetchJson(`https://vihangayt.me/tools/chatgpt5?q=${text}`)
   client.reply(m.chat, json.data, m)
  } catch (e) {
     client.reply(m.chat, '*Maaf fitur ini mungkin sedang eror!, Silahkan hubungi owner.*', m)
     console.log(e)
  }
 }, {
     usage: ['ai'],
     use: 'query',
     category: 'searching',
     limit: 2,
     fitai: true
 }, __filename)