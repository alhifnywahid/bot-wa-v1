const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

neoxr.create(async (m, { client, prefix, Func }) => {
   try {
      let groupList = async () => Object.entries(await client.groupFetchAllParticipating()).slice(0).map(entry => entry[1])
      let groups = await groupList()
      let rows = []

      for (let x of groups) {
         let v = global.db.groups.find(v => v.jid == x.id)
         if (v) {
            rows.push({
               title: x.subject,
               rowId: `${prefix}gc ${x.id}`,
               description: `[ ${v.stay ? 'FOREVER' : (v.expired == 0 ? 'NOT SET' : Func.timeReverse(v.expired - new Date() * 1))}  | ${x.participants.length} | ${(v.mute ? 'OFF' : 'ON')} | ${moment(v.activity).format('DD/MM/YY HH:mm:ss')} ]`
            })
         } else {
            global.db.groups.push({
               jid: x.id,
               activity: new Date * 1,
               antidelete: true,
               antilink: true,
               antiporn: true,
               antivirtex: true,
               filter: true,
               game: true,
               left: true,
               localonly: true,
               mute: false,
               member: {},
               text_left: '',
               text_welcome: '',
               welcome: true,
               expired: 0,
               stay: false
            })
         }
      }

      let message = `Bot has joined ${groups.length} groups. 🍟\n\n`
      for (let i = 0; i < rows.length; i++) {
         let row = rows[i]
         message += `${i + 1}. ${row.title}\n`
         message += `   Description: ${row.description}\n\n`
      }

      client.reply(m.chat, message, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['groups'],
   category: 'owner',
   owner: true
}, __filename)
