const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

neoxr.create(async (m, { client, prefix, Func }) => {
    let groupList = async () => Object.entries(await client.groupFetchAllParticipating()).slice(0).map(entry => entry[1])
    let groups = await groupList()
    let caption = `*么 G R O U P - L I S T*\n\n`
    caption += `*“Bot has joined into ${groups.length} groups, send _${prefix}gc_ or _${prefix}gcopt_ to show all setup options.”*\n\n`
    groups.map((x, i) => {
       let v = global.db.groups.find(v => v.jid == x.id)
       if (v) {
          caption += `›  *${(i + 1)}.* ${x.subject}\n`
          caption += `   *Id Group* : ${x.id.split`@`[0]}\n`
          caption += `   *Expired* : ${v.stay ? '   FOREVER' : (v.expired == 0 ? '   NOT SET' : '   ' + Func.timeReverse(v.expired - new Date() * 1))}\n`
          caption += `   *Member* : ${x.participants.length}\n`
          caption += `   *Status Bot* : ${(v.mute ? 'OFF' : 'ON')}\n`
          caption += `   *Join Date* : ${moment(v.activity).format('DD/MM/YY HH:mm:ss')}\n\n`
       } else {
          global.db.groups.push({
             jid: x.id,
             activity: new Date * 1,
             autoread: true,
             antidelete: true,
             antilink: false,
             antivirtex: false,
             filter: false,
             game: true,
             left: false,
             localonly: false,
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
    caption += `${global.footer}`
    m.reply(caption)
}, {
   usage: ['groups'],
   category: 'owner',
   owner: true
}, __filename)
