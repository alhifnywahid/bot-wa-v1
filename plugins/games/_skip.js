neoxr.create(async (m, {
  client,
  command,
  prefix,
  Func
}) => {
  try {
    let teks
    var id = m.chat
    if (command == 'fiboskip') {
      const playFibo = [{ buttonId: `${prefix}fibonacci`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `✅ Sesi permainan Fibonacci berhasil dihapus.`
      client.deret = client.deret ? client.deret : {}
      if ((id in client.deret)) {
        delete client.deret[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playFibo)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'skip') {
      const playMath = [{ buttonId: `${prefix}math`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `✅ Sesi permainan matematika berhasil dihapus.`
      client.math = client.math ? client.math : {}
      if ((id in client.math)) {
        delete client.math[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playMath)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'verbskip') {
      teks = `✅ Sesi permainan kata kerja berhasil dihapus.`
      client.verb = client.verb ? client.verb : {}
      if ((id in client.verb)) {
        delete client.verb[id]
        return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'brainskip') {
      const playBrainout = [{ buttonId: `${prefix}brainout`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan brainout berhasil di hapus.`
      client.brainout = client.brainout ? client.brainout : {}
      if ((id in client.brainout)) {
        delete client.brainout[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playBrainout)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'flagskip') {
      const playWhatflag = [{ buttonId: `${prefix}whatflag`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan whatflag berhasil di hapus.`
      client.whatflag = client.whatflag ? client.whatflag : {}
      if ((id in client.whatflag)) {
        delete client.whatflag[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playWhatflag)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'picskip') {
      const playWhatpic = [{ buttonId: `${prefix}whatpic`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan whatpic berhasil di hapus.`
      client.whatpic = client.whatpic ? client.whatpic : {}
      if ((id in client.whatpic)) {
        delete client.whatpic[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playWhatpic)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'quizskip') {
      const playQuiz = [{ buttonId: `${prefix}quiz`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan quiz berhasil di hapus.`
      client.quiz = client.quiz ? client.quiz : {}
      if ((id in client.quiz)) {
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playQuiz).then(() => {
          clearTimeout(client.quiz[id][2])
          delete client.quiz[id]
        })
        //! SEND MESSAGE WITH TEKS 
        // return client.reply(m.chat, Func.texted('bold', teks), m).then(() => {
        //     clearTimeout(client.quiz[id][2])
        //     delete client.quiz[id]
        // })
      }
    } else if (command == 'ridskip') {
      const playRiddle = [{ buttonId: `${prefix}riddle`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan riddle berhasil di hapus.`
      client.riddle = client.riddle ? client.riddle : {}
      if ((id in client.riddle)) {
        delete client.riddle[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playRiddle)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'verbskip') {
      teks = `🚩 Sesi permainan verb berhasil di hapus.`
      client.verb = client.verb ? client.verb : {}
      if ((id in client.verb)) {
        delete client.verb[id]
        return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'songskip') {
      const playWhatsong = [{ buttonId: `${prefix}whatsong`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan whatsong berhasil di hapus.`
      client.whatsong = client.whatsong ? client.whatsong : {}
      if ((id in client.whatsong)) {
        delete client.whatsong[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playWhatsong)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'wordskip') {
      const playWhatword = [{ buttonId: `${prefix}whatword`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan whatword berhasil di hapus.`
      client.whatword = client.whatword ? client.whatword : {}
      if ((id in client.whatword)) {
        delete client.whatword[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playWhatword)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'whoskip') {
      const playwhoami = [{ buttonId: `${prefix}whoami`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan whoami berhasil di hapus.`
      client.whoami = client.whoami ? client.whoami : {}
      if ((id in client.whoami)) {
        delete client.whoami[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playwhoami)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'cakskip') {
      const playcaklontong = [{ buttonId: `${prefix}caklontong`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan caklontong berhasil di hapus.`
      client.caklontong = client.caklontong ? client.caklontong : {}
      if ((id in client.caklontong)) {
        delete client.caklontong[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playcaklontong)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'kimiaskip') {
      const playtebakkimia = [{ buttonId: `${prefix}tebakkimia`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan tebakkimia berhasil di hapus.`
      client.tebakkimia = client.tebakkimia ? client.tebakkimia : {}
      if ((id in client.tebakkimia)) {
        delete client.tebakkimia[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playtebakkimia)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'lirikskip') {
      const playtebaklirik = [{ buttonId: `${prefix}tebaklirik`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan tebaklirik berhasil di hapus.`
      client.tebaklirik = client.tebaklirik ? client.tebaklirik : {}
      if ((id in client.tebaklirik)) {
        delete client.tebaklirik[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playtebaklirik)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'tebakskip') {
      const playSusunKata = [{ buttonId: `${prefix}susunkata`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan susun kata berhasil di hapus.`
      client.tebaktebakan = client.tebaktebakan ? client.tebaktebakan : {}
      if ((id in client.tebaktebakan)) {
        delete client.tebaktebakan[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playSusunKata)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    } else if (command == 'mathskip') {
      const playmath = [{ buttonId: `${prefix}math`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
      teks = `🚩 Sesi permainan matematika berhasil di hapus.`
      client.math = client.math ? client.math : {}
      if ((id in client.math)) {
        delete client.math[id]
        //! SEND MESSAGE WITH BUTTONS
        return client.sendButtonText(m.chat, teks, `${global.botname}`, playmath)
        //! SEND MESSAGE WITH TEKS 
        //return client.reply(m.chat, Func.texted('bold', teks), m)
      }
    }
  } catch (e) {
    client.reply(m.chat, Func.jsonFormat(e), m)
  }
}, {
  usage: ['mathskip', 'fiboskip', 'skip', 'verbskip', 'brainskip', 'flagskip', 'picskip', 'quizskip', 'ridskip', 'skip', 'verbskip', 'songskip', 'wordskip', 'whoskip', 'cakskip', 'kimiaskip', 'lirikskip', 'tebakskip'],
  limit: true,
  group: true,
  game: true
}, __filename)
