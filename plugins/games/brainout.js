neoxr.create(async (m, {
  client,
  prefix,
  Func
}) => {
  try {
      const buttons = [{
        buttonId: `${prefix}brainwhat`,
        buttonText: {
          displayText: 'CLUE'
        },
        type: 1
      }, {
        buttonId: `${prefix}brainskip`,
        buttonText: {
          displayText: 'SKIP'
        },
        type: 1
      }]
      const playAgain = [{
        buttonId: `${prefix}brainout`,
        buttonText: {
          displayText: 'MAIN LAGI'
        },
        type: 1
      }]
     client.brainout = client.brainout ? client.brainout : {}
     let id = m.chat,
        timeout = 60000
     if (id in client.brainout) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.brainout[id][0])
     let json = await Api.asahotak()
     let teks = `乂  *B R A I N O U T*\n\n`
     teks += `${json.data.pertanyaan}\n\n`
     teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
     teks += `Reply pesan ini untuk menjawab, kirim *${prefix}brainwhat* untuk bantuan dan *${prefix}brainskip* untuk menghapus sesi.`
     client.brainout[id] = [
        //! SEND MESSAGE WITH TEKS 
        //await client.reply(m.chat, teks, m),
        //! SEND MESSAGE WITH BUTTONS
        await client.sendButtonText(m.chat, `${teks}`, `${global.botname}`, buttons),
        json.data,
        setTimeout(() => {
           if (client.brainout[id]) 
           teks = `*Waktu habis!*\nJawaban : *${json.data.jawaban}*`
           //! SEND MESSAGE WITH TEKS 
           //client.reply(m.chat, teks, client.brainout[id][0])
           //! SEND MESSAGE WITH BUTTONS
           client.sendButtonText(m.chat, `${teks} ${client.brainout[id][0]}`, `${global.botname}`, playAgain)
           delete client.brainout[id]
        }, timeout)
     ]
   } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
      }
  }, {
  usage: ['brainout'],
  hidden: ['asahotak'],
  category: 'games',
  limit: true,
  group: true,
  game: true
}, __filename)
