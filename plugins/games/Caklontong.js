neoxr.create(async (m, {
  client,
  prefix,
  Func
}) => {
  try {
      const buttons = [{
        buttonId: `${prefix}cakclue`,
        buttonText: {
          displayText: 'CLUE'
        },
        type: 1
      }, {
        buttonId: `${prefix}cakskip`,
        buttonText: {
          displayText: 'SKIP'
        },
        type: 1
      }]
      const playAgain = [{
        buttonId: `${prefix}caklontong`,
        buttonText: {
          displayText: 'MAIN LAGI'
        },
        type: 1
      }]
     client.caklontong = client.caklontong ? client.caklontong : {}
     let id = m.chat,
        timeout = 60000
     if (id in client.caklontong) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.caklontong[id][0])
     let json = await Func.jsonRandom ('./media/json/caklontong.json')
     let teks = `乂  *C A K  L O N T O N G*\n\n`
     teks += `${json.soal}\n\n`
     teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
     teks += `Reply pesan ini untuk menjawab, kirim *${prefix}cakclue* untuk bantuan dan *${prefix}cakskip* untuk menghapus sesi.`
     client.caklontong[id] = [
        //! SEND MESSAGE WITH TEKS 
        //await client.reply(m.chat, teks, m),
        //! SEND MESSAGE WITH BUTTONS
        await client.sendButtonText(m.chat, teks, `${global.botname}`, buttons),
        json,
        setTimeout(() => {
           if (client.caklontong[id]) 
           teks = `*Waktu habis!*\nJawaban : *${json.jawaban}*\nPenjelasan : *${json.deskripsi}*`
           //! SEND MESSAGE WITH TEKS 
           //client.reply(m.chat, teks, client.caklontong[id][0])
           //! SEND MESSAGE WITH BUTTONS
           client.sendButtonText(m.chat, `${teks} ${client.caklontong[id][0]}`, `${global.botname}`, playAgain)
           delete client.caklontong[id]
        }, timeout)
     ]
  } catch (e) {
     client.reply(m.chat, Func.jsonFormat(e), m)
  }
   
  }, {
  usage: ['caklontong'],
  hidden: [''],
  category: 'games',
  limit: true,
  group: true,
  game: true
}, __filename)
