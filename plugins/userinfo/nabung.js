const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   users,
   Func
}) => {
   try {
         if (command == 'nabung') {
            if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, '10000'), m)
            if (users.point == 0) return client.reply(m.chat, Func.texted('bold', `🚩 Kamu tidak mempunyai point.`), m)
            if (isNaN(args[0])) return client.reply(m.chat, Func.texted('bold', `🚩 Nominal point harus berupa angka.`), m)
            if (args[0] < 10000) return client.reply(m.chat, Func.texted('bold', `Minimal 10K point untuk di tabung.`), m)
            if (args[0] > users.point) return client.reply(m.chat, Func.texted('bold', `🚩 Point yang kamu miliki tidak cukup untuk di tabung.`), m)
            users.point -= parseInt(args[0])
            users.tabungan += parseInt(args[0])
            users.history_nabung.push({
               sn: Func.makeId(5),
               nominal: parseInt(args[0]),
               type: 'SAVING',
               date: new Date * 1
            })
            let teks = `乂  *N A B U N G*\n\n`
            teks += `Berhasil menyimpan point kedalam tabungan dengan nominal. ${Func.formatNumber(args[0])} point.\n\n`
            teks += `➠ *Total* : ${Func.formatNumber(users.point)}\n`
            teks += `➠ *SN* : ${Func.makeId(5)}\n\nSilakan ketik *${prefix}tabungan* untuk mengetahui uangmu, dan ketik *${prefix}hsv/${prefix}hsw* untuk melihat orang yang telah menabung.`
            client.reply(m.chat, teks, m)
         } else if (command == 'tarik') {
            if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, '10000'), m)
            if (users.tabungan == 0) return client.reply(m.chat, Func.texted('bold', `🚩 Kamu tidak mempunyai point di tabungan.`), m)
            if (isNaN(args[0])) return client.reply(m.chat, Func.texted('bold', `🚩 Nominal point harus berupa angka.`), m)
            if (args[0] < 10000) return client.reply(m.chat, Func.texted('bold', `🚩 Minimal 10K untuk di tarik.`), m)
            if (args[0] > users.tabungan) return client.reply(m.chat, Func.texted('bold', `🚩 Nominal point melebihi jumlah tabunganmu saat ini.`), m)
            users.point += parseInt(args[0])
            users.tabungan -= parseInt(args[0])
            users.history_nabung.push({
               sn: Func.makeId(5),
               nominal: parseInt(args[0]),
               type: 'WITHDRAW',
               date: new Date * 1
            })
            let teks = `乂  *T A R I K*\n\n`
            teks += `Berhasil melakukan penarikan point dengan nominal. ${Func.formatNumber(args[0])} point.\n\n`
            teks += `➠ *Sisa point* : ${Func.formatNumber(users.point)}\n`
            teks += `➠ *SN* : ${Func.makeId(5)}`
            client.reply(m.chat, teks, m)
         } else if (command == 'hsv') {
            let data = global.db.users.find(v => v.jid == m.sender)
            if (data.tabungan == 0) return client.reply(m.chat, `🚩 Empty data!`, m)
            let SV_P = data.history_nabung.filter(v => v.type == 'SAVING')
            if (SV_P.length == 0) return client.reply(m.chat, `Empty data!`, m)
            SV_P.sort((a, b) => b.date - a.date)
            let teks = `乂  *T A B U N G A N*\n\n`
            teks += SV_P.slice(0, 20).map((v, i) => (i + 1) + '. Menyimpan point pada tanggal _' + moment(v.date).format('DD/MM/YY HH:mm:ss') + '_\n	◦  *Nominal* :  ' + Func.formatNumber(v.nominal) + '\n	◦  *SN* :  ' + v.sn).join`\n\n`
            teks += `\n\n${global.footer}`
            client.reply(m.chat, teks, m)
         } else if (command == 'hsw') {
           data = db.users.find(v => v.jid == m.sender)
            if (data.tabungan == 0) return client.reply(m.chat, `Empty data!`, m)
            let WD_P = data.history_nabung.filter(v => v.type == 'WITHDRAW')
            if (WD_P.length == 0) return client.reply(m.chat, `Empty data!`, m)
            WD_P.sort((a, b) => b.date - a.date)
            let teks = `乂  *P E N A R I K A N*\n\n`
            teks += WD_P.slice(0, 20).map((v, i) => (i + 1) + '. Penarikan pada tanggal _' + moment(v.date).format('DD/MM/YY HH:mm:ss') + '_\n	◦  *Nominal* :  ' + Func.formatNumber(v.nominal) + '\n	◦  *SN* :  ' + v.sn).join`\n\n`
            teks += `\n\n${global.footer}`
            client.reply(m.chat, teks, m)
         } else if (command == 'tabungan') {
            let user = db.users.find(v => v.jid == m.sender)
            if (user.tabungan < 1) return client.reply(m.chat, `🚩 *Kamu tidak mempunyai point di tabungan*.`, m)
            client.reply(m.chat, Func.texted('bold', `🚩 Kamu mempunyai tabungan sebanyak ${Func.h2k(Func.formatNumber(user.tabungan))} (${Func.formatNumber(user.tabungan)}) point.`), m)
         }
      } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['nabung', 'tarik', 'hsv', 'hsw', 'tabungan'],
   category: 'user info'
}, __filename)