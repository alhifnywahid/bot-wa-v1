neoxr.create(async (m, {
  client,
  command,
  prefix,
  Func
}) => {
  try {
    const playQuiz = [{ buttonId: `${prefix}quiz`, buttonText: { displayText: 'MAIN LAGI' }, type: 1 }]
    let teks
    var id = m.chat
    if (command == 'fiboskip') {
      client.deret = client.deret ? client.deret : {}
      if ((id in client.deret)) {
        delete client.deret[id]
        return client.reply(m.chat, Func.texted('bold', `✅ Sesi permainan Fibonacci berhasil dihapus.`), m)
      }
    } else if (command == 'skip') {
      client.math = client.math ? client.math : {}
      if ((id in client.math)) {
        delete client.math[id]
        return client.reply(m.chat, Func.texted('bold', `✅ Sesi permainan matematika berhasil dihapus.`), m)
      }
    } else if (command == 'verbskip') {
      client.verb = client.verb ? client.verb : {}
      if ((id in client.verb)) {
        delete client.verb[id]
        return client.reply(m.chat, Func.texted('bold', `✅ Sesi permainan kata kerja berhasil dihapus.`), m)
      }
    } else if (command == 'brainskip') {
      client.brainout = client.brainout ? client.brainout : {}
      if ((id in client.brainout)) {
        delete client.brainout[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan brainout berhasil di hapus.`), m)
      }
    } else if (command == 'flagskip') {
      client.whatflag = client.whatflag ? client.whatflag : {}
      if ((id in client.whatflag)) {
        delete client.whatflag[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatflag berhasil di hapus.`), m)
      }
    } else if (command == 'picskip') {
      client.whatpic = client.whatpic ? client.whatpic : {}
      if ((id in client.whatpic)) {
        delete client.whatpic[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatpic berhasil di hapus.`), m)
      }
    } else if (command == 'quizskip') {
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
      client.riddle = client.riddle ? client.riddle : {}
      if ((id in client.riddle)) {
        delete client.riddle[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan riddle berhasil di hapus.`), m)
      }
    } else if (command == 'verbskip') {
      client.verb = client.verb ? client.verb : {}
      if ((id in client.verb)) {
        delete client.verb[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan verb berhasil di hapus.`), m)
      }
    } else if (command == 'songskip') {
      client.whatsong = client.whatsong ? client.whatsong : {}
      if ((id in client.whatsong)) {
        delete client.whatsong[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatsong berhasil di hapus.`), m)
      }
    } else if (command == 'wordskip') {
      client.whatword = client.whatword ? client.whatword : {}
      if ((id in client.whatword)) {
        delete client.whatword[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatword berhasil di hapus.`), m)
      }
    } else if (command == 'whoskip') {
      client.whoami = client.whoami ? client.whoami : {}
      if ((id in client.whoami)) {
        delete client.whoami[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whoami berhasil di hapus.`), m)
      }
    } else if (command == 'cakskip') {
      client.caklontong = client.caklontong ? client.caklontong : {}
      if ((id in client.caklontong)) {
        delete client.caklontong[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan caklontong berhasil di hapus.`), m)
      }
    } else if (command == 'kimiaskip') {
      client.tebakkimia = client.tebakkimia ? client.tebakkimia : {}
      if ((id in client.tebakkimia)) {
        delete client.tebakkimia[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan tebakkimia berhasil di hapus.`), m)
      }
    } else if (command == 'lirikskip') {
      client.tebaklirik = client.tebaklirik ? client.tebaklirik : {}
      if ((id in client.tebaklirik)) {
        delete client.tebaklirik[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan tebaklirik berhasil di hapus.`), m)
      }
    } else if (command == 'tebakskip') {
      client.tebaktebakan = client.tebaktebakan ? client.tebaktebakan : {}
      if ((id in client.tebaktebakan)) {
        delete client.tebaktebakan[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan tebaklirik berhasil di hapus.`), m)
      }
    } else if (command == 'mathskip') {
      client.math = client.math ? client.math : {}
      if ((id in client.math)) {
        delete client.math[id]
        return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan matematika berhasil di hapus.`), m)
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
