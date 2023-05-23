const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
neoxr.create(async (m, {
   client,
   prefix,
   Func
}) => {
   try {
      let groupList = async () => Object.entries(await client.groupFetchAllParticipating()).slice(0).map(entry => entry[1])
      let groups = await groupList()
      let rows = []
      groups.map(x => {
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
      })
      /*client.sendList(m.chat, '', `Bot has joined to ${groups.length} groups. 🍟`, '', 'Tap!', [{
         rows
      }], m)*/
      client.reply(m.chat, global.db.groups.push, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['groups'],
   category: 'owner',
   owner: true
}, __filename)
