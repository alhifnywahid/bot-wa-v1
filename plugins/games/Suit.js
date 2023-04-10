neoxr.create(async (m, {
   client,
   prefix,
   isOwner,
   command,
   Func
}) => {
   try {
      let timeout = 60000
      let poin = Func.randomInt(global.min_reward, global.max_reward)
      let poin_lose = Func.randomInt(global.min_reward, global.max_reward)
      if (global.db.users.find(v=> v.jid == m.sender).point < 10000) return client.reply(m.chat, Func.texted('bold', `🚩 Point yang kamu miliki tidak cukup untuk bermain game suit, minimal mempunyai 10Ribu point`), m)
      client.suit = client.suit ? client.suit : {}
      if (Object.values(client.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) return client.reply(m.chat, Func.texted('bold', `🚩 Kamu belum menyelesaikan suit sebelumnya`), m)
      if (!m.mentionedJid[0]) return client.reply(m.chat, Func.example(prefix, command, '@0'), m)
      if (global.db.users.find(v => v.jid == m.mentionedJid[0]).point < 1000) return client.reply(m.chat, Func.texted('bold', `🚩 Orang yang kamu tantang tidak mempunyai point yang cukup untuk bermain suit`), m)
      if (Object.values(client.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) return client.reply(m.chat, Func.texted('bold', `🚩 Orang yang kamu ajak bermain sedang bermain suit dengan orang lain`), m)
      let id = 'suit_' + new Date() * 1
      let teks = `❏  *S U I T (PVP)*\n\n`
      teks += `@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\n`
      teks += `Silahkan @${m.mentionedJid[0].split`@`[0]} kirim *${prefix}gas* untuk mulai bermain dan kirim *${prefix}malas* untuk menolak tantangan bermain suit`
      client.suit[id] = {
         chat: await client.reply(m.chat, teks, m),
         id,
         p: m.sender,
         p2: m.mentionedJid[0],
         status: 'wait',
         waktu: setTimeout(() => {
            if (client.suit[id]) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi game Suit telah habis.`), m).then(() => delete client.suit[id])
         }, timeout),
         poin,
         poin_lose,
         timeout
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
   
   }, {
   usage: ['suit'],
   use: '@tag',
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)