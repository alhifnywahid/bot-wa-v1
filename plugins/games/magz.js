neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   Func
}) => {
   try {
      if (global.db.users.find(v => v.jid == m.sender).point < 1000) return client.reply(m.chat, Func.texted('bold', `🚩 Poin yang Anda miliki tidak cukup untuk bermain game magz.`), m)
      client.magz = client.magz ? client.magz : {}
      let timeout = 120000,
         id = m.chat
      if (command == 'magz') return client.reply(m.chat, info(prefix), m)
      if (command == 'create') {
         let check = Object.values(client.magz).find(room => room.id == m.chat)
         if (check) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi sudah tersedia dengan kode : "${check.code}"`), m)
         let code = Func.makeId(4)
         let teks = `Sesi permainan Magz berhasil dibuat dengan kode : *${code}*\n\n`
         teks += `🚩 Jika Anda ingin solo player, kirim *${prefix}start*, Anda juga dapat mengundang teman Anda untuk bergabung dalam sesi bermain bersama dengan meminta teman Anda untuk mengirim *${prefix}in*`
         client.magz[id] = {
            m: await client.reply(m.chat, teks, m),
            player: [m.sender],
            leaderboard: {
               [m.sender]: {
                  score: 0,
                  correctAns: 0,
                  wrongAns: 0
               }
            },
            code,
            creator: m.sender,
            id,
            playing: false,
            playTimes: 0,
            words: [],
            answer: '',
            wrongs: 0,
            startTime: setTimeout(() => {
               if (client.magz[id]) return client.reply(m.chat, Func.texted('bold', `🚩 Permainan tidak dimulai dalam waktu 2 menit, room "${code}" telah dihapus.`), m).then(() => {
                  delete client.magz[id]
               })
            }, timeout),
            timeout
         }
      } else if (command == 'in') {
         let room1 = Object.values(client.magz).find(room => room.id == m.chat)
         let room2 = Object.values(client.magz).find(room => room.id == m.chat && room.playing)
         let room3 = Object.values(client.magz).find(room => room.id == m.chat && room.player.includes(m.sender))
         let room4 = Object.values(client.magz).find(room => room.id == m.chat && !room.player.includes(m.sender) && !room.playing)
         if (!room1) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi tidak ditemukan, buat sesi terlebih dahulu dengan mengirimkan ${prefix}create`), m)
         if (room2) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak dapat bergabung karena permainan sedang berlangsung.`), m)
         if (room3) return client.reply(m.chat, Func.texted('bold', `🚩 Anda sudah dalam sesi.`), m)
         if (room4) {
            room4.player.push(m.sender)
            room4.leaderboard[m.sender] = {
               score: 0,
               correctAns: 0,
               wrongAns: 0
            }
            client.reply(m.chat, Func.texted('bold', `🚩 Berhasil masuk ke sesi.`), m)
         } else client.reply(m.chat, Func.texted('bold', `🚩 Emror!`), m)
      } else if (command == 'out') {
         let playing = Object.values(client.magz).find(room => room.id && room.playing)
         if (playing) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak dapat keluar dari sesi karena permainan sedang berlangsung.`), m)
         let creator = Object.values(client.magz).find(room => room.id && room.creator == m.sender)
         if (creator) return client.reply(m.chat, Func.texted('bold', `🚩 Karena Anda adalah pembuat sesi, sesi yang Anda buat dengan kode "${creator.code}" akan dihapus.`), m).then(() => {
            delete client.magz[creator.id]
         })
         let room = Object.values(client.magz).find(room => room.id && room.player.includes(m.sender))
         if (room) return client.reply(m.chat, Func.texted('bold', `🚩 Keluar dari sesi permainan Magz berhasil.`), m).then(() => Func.removeItem(room.player, m.sender))
         client.reply(m.chat, Func.texted('bold', `🚩 Anda tidak sedang dalam sesi permainan Magz.`), m)
      } else if (command == 'start') {
         let creator = Object.values(client.magz).find(room => room.id == m.chat && room.creator != m.sender)
         if (creator) return client.reply(m.chat, Func.texted('bold', `🚩 Game hanya dapat dimulai oleh @${creator.split('@')[0]} sebagai pembuat sesi.`), m)
         let check = Object.values(client.magz).find(room => room.id == m.chat)
         if (!check) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi tidak ditemukan, harap buat sesi terlebih dahulu dengan mengirimkan ${prefix}create`), m)
         let playing = Object.values(client.magz).find(room => room.id == m.chat && room.playing)
         if (playing) return client.reply(m.chat, Func.texted('bold', `🚩 Permainan sedang berlangsung.`), m)
         let room = Object.values(client.magz).find(room => room.id == m.chat)
         if (room) {
            clearTimeout(room.startTime)
            room.playing = true
            let people = Object.entries(room.leaderboard).sort((a, b) => b[1].score - a[1].score)
            var kata = Func.random(["cinta", "sabar", "baik hati", "tidak pernah", "cemburu", "iri", "sombong", "bangga", "angkuh", "egois", "melakukan", "menuntut", "menjaga" , "skor", "salah", "bersukacita", "kebenaran", "memberi", "kalah", "iman", "selalu"])
            room.answer = kata.toUpperCase()
            room.playTimes += 1
            let teks = `乂  *M A G Z*\n\n`
            teks += `Start : ${(kata).toUpperCase()}\n`
            teks += `${Func.filter(kata).toUpperCase()}... ?\n\n`
            teks += `Player :\n\n`
            teks += people.map(([user, data], i) => (i + 1) + '. @' + user.split`@` [0] + '\n    *( × )* : ' + data.wrongAns + '  –  *( √ )* : ' + data.correctAns + '  –  *Score* : ' + Func.formatNumber(data.score)).join('\n')
            teks += `\n\n`
            teks += `Question : [ ${room.playTimes} / 10 ]\n`
            teks += `Jawab pertanyaan ini tanpa membalas pesan.`
            room.chat = await client.reply(m.chat, teks, m)
            room.time = setTimeout(() => {
                  if (client.magz[id]) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak ada jawaban untuk pertanyaan pertama, room "${room.code}" telah dihapus.`), m).then(() => delete client.magz[id])
               }, timeout),
               timeout
         }
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['magz'],
   hidden: ['create', 'in', 'out', 'start'],
   category: 'games',
   limit: true,
   group: true,
   game: true
}, __filename)

const info = (prefix) => {
   return `乂  *M A G Z*
   
Game Magz adalah game *"Menghubungkan Kata"*, konsep game ini hanya mencari kata dalam bahasa Indonesia, berikut aturan mainnya :

➠ Untuk memainkan game ini, Anda membutuhkan 1.000 poin.
➠ Setidaknya ada 1 pemain dalam 1 sesi.
➠ Permainan berlangsung 2 menit dengan 10 pertanyaan.

Command :
➠ *${prefix}create* -- Membuat sesi. 
➠ *${prefix}in* -- Masuk ke sesi. 
➠ *${prefix}out* -- Keluar dari sesi. 
➠ *${prefix}start* -- Memulai permainan.

${global.footer}`
}