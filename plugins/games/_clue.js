neoxr.create(async (m, {
   client,
   command,
   Func
}) => {
   try {
      var id = m.chat
      if (command == 'listenclue') {
         client.listening = client.listening ? client.listening : {}
         if ((id in client.listening)) {
            const clue = client.listening[id][1].replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ' + clue, m)
         }
      } else if (command == 'brainwhat') {
         client.brainout = client.brainout ? client.brainout : {}
         if ((id in client.brainout)) {
            const clue = client.brainout[id][1].jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         }
      } else if (command == 'clue') {
         client.riddle = client.riddle ? client.riddle : {}
         if ((id in client.riddle)) {
            const clue = client.riddle[id][1].jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         }
      } else if (command == 'flagclue') {
         client.whatflag = client.whatflag ? client.whatflag : {}
         if ((id in client.whatflag)) {
            const clue = client.whatflag[id][1].name.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         }
      } else if (command == 'picclue') {
         client.whatpic = client.whatpic ? client.whatpic : {}
         if ((id in client.whatpic)) {
            const clue = client.whatpic[id][1].jawaban.toLowerCase().replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         }
      } else if (command == 'quizclue') {
         client.quiz = client.quiz ? client.quiz : {}
         if ((id in client.quiz)) {
            let json = JSON.parse(JSON.stringify(client.quiz[id][1]))
            var clue = ''
            for (let i = 0; i < json.jawaban.length; i++) {
               if (client.quiz[m.chat][3].includes(json.jawaban[i])) {
                  clue += '```' + Func.ucword(json.jawaban[i]) + '```\n'
               } else {
                  clue += '```' + Func.ucword(json.jawaban[i].replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')) + '```\n'
               }
            }
            let pop = clue.split('\n')
            pop.pop()
            let isClue = pop.map((v, i) => (i + 1) + '. ' + v).join('\n')
            client.reply(m.chat, isClue, m)
         }
      } else if (command == 'songclue') {
         client.whatsong = client.whatsong ? client.whatsong : {}
         if ((id in client.whatsong)) {
            const clue = client.whatsong[id][1].jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         }
      } else if (command == 'wordclue') {
         client.whatword = client.whatword ? client.whatword : {}
         if ((id in client.whatword)) {
            const clue = client.whatword[id][1].tipe
            client.reply(m.chat, '🚩 Kata tersebut merujuk pada : ```' + clue + '```', m)
         }
      } else if (command == 'who') {
         client.whoami = client.whoami ? client.whoami : {}
         if ((id in client.whoami)) {
            const clue = client.whoami[id][1].jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         
           }
      } else if (command == 'cakclue') {
         client.caklontong = client.caklontong ? client.caklontong : {}
         if ((id in client.caklontong)) {
            const clue = client.caklontong[id][1].jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         }
       } else if (command == 'kimiaclue') {
         client.tebakkimia = client.tebakkimia ? client.tebakkimia : {}
         if ((id in client.tebakkimia)) {
            const clue = client.tebakkimia[id][1].lambang.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         }
       } else if (command == 'lirikclue') {
         client.tebaklirik = client.tebaklirik ? client.tebaklirik : {}
         if ((id in client.tebaklirik)) {
            const clue = client.tebaklirik[id][1].jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
         }
       } else if (command == 'tebakclue') {
         client.tebaktebakan = client.tebaktebakan ? client.tebaktebakan : {}
         if ((id in client.tebaktebakan)) {
            const clue = client.tebaktebakan[id][1].jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
            client.reply(m.chat, '🚩 Clue : ```' + clue + '```', m)
             }
        }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['listenclue', 'brainwhat', 'clue', 'flagclue', 'picclue', 'quizclue', 'songclue', 'wordclue', 'who', 'cakclue', 'kimiaclue', 'lirikclue', 'tebakclue'],
   limit: true,
   group: true,
   game: true
}, __filename)