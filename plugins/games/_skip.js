neoxr.create(async (m, {
   client,
   command,
   Func
}) => {
   try {
      var id = m.chat
      if (command == 'fiboskip') {
         client.deret = client.deret ? client.deret : {}
         if ((id in client.deret)) return client.reply(m.chat, Func.texted('bold', `✅ Sesi permainan Fibonacci berhasil dihapus.`), m).then(() => delete client.deret[id])
      } else if (command == 'skip') {
         client.math = client.math ? client.math : {}
         if ((id in client.math)) return client.reply(m.chat, Func.texted('bold', `✅ Sesi permainan matematika berhasil dihapus.`), m).then(() => delete client.math[id])
      } else if (command == 'verbskip') {
         client.verb = client.verb ? client.verb : {}
         if ((id in client.verb)) return client.reply(m.chat, Func.texted('bold', `✅ Sesi permainan kata kerja berhasil dihapus.`), m).then(() => delete client.verb[id])
      } else if (command == 'brainskip') {
         client.brainout = client.brainout ? client.brainout : {}
         if ((id in client.brainout)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan brainout berhasil di hapus.`), m).then(() => delete client.brainout[id])
      } else if (command == 'fiboskip') {
         client.deret = client.deret ? client.deret : {}
         if ((id in client.deret)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan fibonacci berhasil di hapus.`), m).then(() => delete client.deret[id])
      } else if (command == 'flagskip') {
         client.whatflag = client.whatflag ? client.whatflag : {}
         if ((id in client.whatflag)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatflag berhasil di hapus.`), m).then(() => delete client.whatflag[id])
      } else if (command == 'picskip') {
         client.whatpic = client.whatpic ? client.whatpic : {}
         if ((id in client.whatpic)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatpic berhasil di hapus.`), m).then(() => delete client.whatpic[id])
      } else if (command == 'quizskip') {
         client.quiz = client.quiz ? client.quiz : {}
         if ((id in client.quiz)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan quiz berhasil di hapus.`), m).then(() => {
            clearTimeout(client.quiz[id][2])
            delete client.quiz[id]
         })
      } else if (command == 'ridskip') {
         client.riddle = client.riddle ? client.riddle : {}
         if ((id in client.riddle)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan riddle berhasil di hapus.`), m).then(() => delete client.riddle[id])
      } else if (command == 'skip') {
         client.math = client.math ? client.math : {}
         if ((id in client.math)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan math berhasil di hapus.`), m).then(() => delete client.math[id])
      } else if (command == 'verbskip') {
         client.verb = client.verb ? client.verb : {}
         if ((id in client.verb)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan verb berhasil di hapus.`), m).then(() => delete client.verb[id])
      } else if (command == 'songskip') {
         client.whatsong = client.whatsong ? client.whatsong : {}
         if ((id in client.whatsong)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatsong berhasil di hapus.`), m).then(() => delete client.whatsong[id])
      } else if (command == 'wordskip') {
         client.whatword = client.whatword ? client.whatword : {}
         if ((id in client.whatword)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whatword berhasil di hapus.`), m).then(() => delete client.whatword[id])
      } else if (command == 'whoskip') {
         client.whoami = client.whoami ? client.whoami : {}
         if ((id in client.whoami)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan whoami berhasil di hapus.`), m).then(() => delete client.whoami[id])
      } else if (command == 'cakskip') {
         client.caklontong = client.caklontong ? client.caklontong : {}
         if ((id in client.caklontong)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan caklontong berhasil di hapus.`), m).then(() => delete client.caklontong[id])
      } else if (command == 'kimiaskip') {
         client.tebakkimia = client.tebakkimia ? client.tebakkimia : {}
         if ((id in client.tebakkimia)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan tebakkimia berhasil di hapus.`), m).then(() => delete client.tebakkimia[id])
      } else if (command == 'lirikskip') {
         client.tebaklirik = client.tebaklirik ? client.tebaklirik : {}
         if ((id in client.tebaklirik)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan tebaklirik berhasil di hapus.`), m).then(() => delete client.tebaklirik[id])
      } else if (command == 'tebakskip') {
         client.tebaktebakan = client.tebaktebakan ? client.tebaktebakan : {}
         if ((id in client.tebaktebakan)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan tebaklirik berhasil di hapus.`), m).then(() => delete client.tebaktebakan[id])
      } else if (command == 'mathskip') {
         client.math = client.math ? client.math : {}
         if ((id in client.math)) return client.reply(m.chat, Func.texted('bold', `🚩 Sesi permainan matematika berhasil di hapus.`), m).then(() => delete client.math[id])
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