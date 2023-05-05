neoxr.create(async (m, {
  client,
  prefix,
  Func
}) => {
  try {
    const buttons = [{
      buttonId: `${prefix}quizclue`,
      buttonText: {
        displayText: 'CLUE'
      },
      type: 1
    }, {
      buttonId: `${prefix}quizskip`,
      buttonText: {
        displayText: 'SKIP'
      },
      type: 1
    }]
    const playAgain = [{
      buttonId: `${prefix}quiz`,
      buttonText: {
        displayText: 'MAIN LAGI'
      },
      type: 1
    }]
     if (global.db.users.find(v => v.jid == m.sender).point < 10000) return client.reply(m.chat, Func.texted('bold', `🚩 Untuk bermain game ini kamu harus mempunyai minimal 10K point.`), m)
     client.quiz = client.quiz ? client.quiz : {}
     let id = m.chat,
        timeout = 120000
     if (id in client.quiz) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.quiz[id][0])
     let json = Func.jsonRandom('./media/json/quiz.json')
     let teks = `乂  *Q U I Z*\n\n`
     teks += `${json.pertanyaan.replace(json.pertanyaan.charAt(0), json.pertanyaan.charAt(0).toUpperCase())} ??\n\n`
     teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
     teks += `Terdapat *${json.jawaban.length}* jawaban, reply pesan ini untuk menjawab, kirim *${prefix}quizclue* untuk bantuan dan *${prefix}quizskip* untuk menghapus sesi.`
     client.quiz[id] = [
        //! SEND MESSAGE WITH TEKS 
        //client.reply(m.chat, teks, m),

        //! SEND MESSAGE WITH BUTTONS
        await client.sendButtonText(m.chat, teks, `${global.botname}`, buttons),
        json,
        setTimeout(() => {
           if (client.quiz[id]) {
            let isJson = JSON.parse(JSON.stringify(client.quiz[id][1]))
              let teks = `乂  *J A W A B A N*\n\n`
              teks += isJson.jawaban.map((v, i) => (i + 1) + '. ```' + Func.ucword(v) + '```').join('\n')
              teks += `\n\n*Waktu habis!* berikut adalah jawabannya.`
              //! SEND MESSAGE WITH TEKS 
              //client.reply(m.chat, teks, client.quiz[id][0])
              //! SEND MESSAGE WITH BUTTONS
              client.sendButtonText(m.chat, teks + client.quiz[id][0], `${global.botname}`, playAgain);
           }
           delete client.quiz[id]
        }, timeout),
        [], {}
     ]
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
 }, {
  usage: ['quiz'],
  hidden: ['family100'],
  category: 'games',
  limit: true,
  group: true,
  game: true
}, __filename)
