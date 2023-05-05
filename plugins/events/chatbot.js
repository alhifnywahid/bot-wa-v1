neoxr.create(async (m, {
   client,
   body,
   users,
   setting,
   Func,
   Scraper
 }) => {
   try {
      if (body && global.evaluate_chars.some(v => body.startsWith(v)) || body && Func.socmed(body)) return
      global.db.chatroom = global.db.chatroom ? global.db.chatroom : []
      const room = global.db.chatroom.find(v => v.jid == m.sender)
      const hint = [
         'kamu siapa?',
         'kamu siapa',
         'siapa?',
         'siapa',
         'mau curhat'
      ]
      if (m.isGroup) {
         if (body && hint.includes(body.toLowerCase())) return m.reply('Hai, saya Zephyr Bot\Apakah Anda ingin mengobrol dengan saya? kirim *Zephyr* untuk membuat sesi obrolan.')
         for (let jid of [...new Set([...(m.mentionedJid || [])])]) {
            if (jid != client.decodeJid(client.user.id)) continue
            if (!m.fromMe) return m.reply('halo kak mau curhat ama simi ketik *Zephyr* untuk memulai sesi.')
         }
         if (body && body.toLowerCase() == 'Zephyr' && !room) {
            if (global.db.chatroom.length >= 3) return m.reply('Ruang obrolan penuh menunggu giliran berikutnya.')
            return m.reply('✅ Sesi obrolan berhasil dibuat.\nKirim teks apa pun lalu bot akan merespons, untuk menghapus pengiriman sesi obrolan *stop*.').then(() => global.db.chatroom.push({
               jid: m.sender,
               created_at: new Date * 1
            }))
         } else if (body && body.toLowerCase() == 'Zephyr' && room) return m.reply('Anda telah berada dalam sesi obrolan.')
         if (body && body.toLowerCase() == 'stop' && room) return m.reply('✅ Sesi obrolan berhasil dihapus.').then(() => Func.removeItem(global.db.chatroom, room))
         if (room) {
            var json = await Scraper.simsimiV2(body)
            if (!json.status) {
               var json = await Scraper.simsimiV2(body)
               if (!json.status) {
                  var json = await Scraper.chatAI(process.env.BRAIN_API_ID, process.env.BRAIN_API_KEY, body)
               }
            }
            if (json.status) return client.reply(m.chat, json.msg, m).then(() => room.created_at = new Date * 1)
         }
      } else {
         if (!setting.chatbot) return
         if (body && hint.includes(body.toLowerCase())) return m.reply('Hi, i\'am Zephyr Bot')
         var json = await Scraper.simsimiV2(body)
         if (!json.status) {
            var json = await Scraper.simsimiV2(body)
            if (!json.status) {
               var json = await Scraper.chatAI(process.env.BRAIN_API_ID, process.env.BRAIN_API_KEY, body)
            }
         }
         if (json.status) return client.reply(m.chat, json.msg, m)
      }
   } catch (e) {
      console.log(e)
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
 }, {
   error: false
 }, __filename)
 
