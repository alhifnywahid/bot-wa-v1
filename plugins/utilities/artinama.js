neoxr.create(async (m, {
   client,
   text,
   prefix,
   command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'megawati'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.nama(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let teks = `◦  *Nama* : ${Func.ucword(text)}\n`
         teks += `◦  *Arti* : ${json.data.arti.split('arti:')[1]}`
         client.reply(m.chat, teks, m)
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
}, {
   usage: ['artinama'],
   hidden: ['nama'],
   use: 'name',
   category: 'utilities',
   restrict: true,
   premium: true,
   limit: true
}, __filename)
