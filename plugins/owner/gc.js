neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   Func
}) => {
   try {
      if (!args || !args[0]) return
      if (command == 'gc') {
         let jid = args[0]
         let rows = [{
            title: 'STAY 1 DAY',
            rowId: `${prefix}modify ${jid} 1D`,
            description: ``
         }, {
            title: 'STAY 1 WEEK',
            rowId: `${prefix}modify ${jid} 7D`,
            description: ``
         }, {
            title: 'STAY 1 MONTH',
            rowId: `${prefix}modify ${jid} 30D`,
            description: ``
         }, {
            title: 'STAY 2 MONTHS',
            rowId: `${prefix}modify ${jid} 60D`,
            description: ``
         }, {
            title: 'STAY 3 MONTHS',
            rowId: `${prefix}modify ${jid} 90D`,
            description: ``
         }, {
            title: 'STAY 6 MONTHS',
            rowId: `${prefix}modify ${jid} 180D`,
            description: ``
         }, {
            title: 'STAY 9 MONTHS',
            rowId: `${prefix}modify ${jid} 270D`,
            description: ``
         }, {
            title: 'STAY 12 MONTHS',
            rowId: `${prefix}modify ${jid} 365D`,
            description: ``
         }, {
            title: 'STAY FOREVER',
            rowId: `${prefix}modify ${jid} 1`,
            description: ``
         }, {
            title: 'GET LINK',
            rowId: `${prefix}modify ${jid} 2`,
            description: ``
         }, {
            title: 'LEAVE',
            rowId: `${prefix}modify ${jid} 3`,
            description: ``
         }, {
            title: 'MUTE',
            rowId: `${prefix}modify ${jid} 4`,
            description: ``
         }, {
            title: 'UNMUTE',
            rowId: `${prefix}modify ${jid} 5`,
            description: ``
         }, {
            title: 'CLOSE',
            rowId: `${prefix}modify ${jid} 6`,
            description: ``
         }, {
            title: 'OPEN',
            rowId: `${prefix}modify ${jid} 7`,
            description: ``
         }, {
            title: 'STEAL',
            rowId: `${prefix}modify ${jid} 8`,
            description: ``
         }, {
            title: 'RESET TIME',
            rowId: `${prefix}modify ${jid} 9`,
            description: ``
         }]
         client.sendList(m.chat, '', `Option to set ${await (await client.groupMetadata(jid)).subject} group. 🍟`, '', 'Tap!', [{
            rows
         }], m)
      } else if (command == 'modify') {
         if (!args[1]) return
         let jid = args[0]
         let dial = args[1]
         let groupMetadata = await (await client.groupMetadata(jid))
         let groupName = groupMetadata.subject
         let adminList = await client.groupAdmin(jid)
         let admin = adminList.includes((client.user.id.split`:` [0]) + '@s.whatsapp.net')
         let now = new Date() * 1
         if (/1D|7D|30D|60D|90D|180D|270D|365D/.test(dial)) {
            let day = 86400000 * parseInt(dial.replace('D', ''))
            global.db.groups.find(v => v.jid == jid).expired = now + day
            global.db.groups.find(v => v.jid == jid).stay = false
            return client.reply(m.chat, Func.texted('bold', `🚩 Bot duration is successfully set to stay for ${dial.replace('D', ' day')} di in ${groupName} group.`), m)
         } else if (dial == 1) {
            global.db.groups.find(v => v.jid == jid).expired = 0
            global.db.groups.find(v => v.jid == jid).stay = true
            return client.reply(m.chat, Func.texted('bold', `🚩 Successfully set bot to stay forever in ${groupName} group.`), m)
         } else if (dial == 2) {
            if (!admin) return client.reply(m.chat, Func.texted('bold', `🚩 Can't get ${groupName} group link because the bot is not an admin.`), m)
            client.reply(m.chat, 'https://chat.whatsapp.com/' + (await client.groupInviteCode(jid)), m)
         } else if (dial == 3) {
            await client.reply(jid, `🚩 Good Bye!`, null, {
               mentions: groupMetadata.participants.map(v => v.id)
            }).then(() => {
               client.groupLeave(jid).then(() => {
                  global.db.groups.find(v => v.jid == jid).expired = 0
                  global.db.groups.find(v => v.jid == jid).stay = false
                  return client.reply(m.chat, Func.texted('bold', `🚩 Successfully leave from ${groupName} group.`), m)
               })
            })
         } else if (dial == 4) {
            global.db.groups.find(v => v.jid == jid).mute = true
            client.reply(m.chat, Func.texted('bold', `🚩 Bot successfully muted in ${groupName} group.`), m)
         } else if (dial == 5) {
            global.db.groups.find(v => v.jid == jid).mute = false
            client.reply(m.chat, Func.texted('bold', `🚩 Bot successfully unmuted in ${groupName} group.`), m)
         } else if (dial == 6) {
            if (!admin) return client.reply(m.chat, Func.texted('bold', `🚩 Can't close ${groupName} group link because the bot is not an admin.`), m)
            client.groupSettingUpdate(jid, 'announcement').then(() => {
               client.reply(jid, Func.texted('bold', `🚩 Group has been closed.`)).then(() => {
                  client.reply(m.chat, Func.texted('bold', `🚩 Successfully close ${groupName} group.`), m)
               })
            })
         } else if (dial == 7) {
            if (!admin) return client.reply(m.chat, Func.texted('bold', `🚩 Can't open ${groupName} group link because the bot is not an admin.`), m)
            client.groupSettingUpdate(jid, 'not_announcement').then(() => {
               client.reply(jid, Func.texted('bold', `🚩 Group has been opened.`)).then(() => {
                  client.reply(m.chat, Func.texted('bold', `🚩 Successfully open ${groupName} group.`), m)
               })
            })
         } else if (dial == 8) {
            let set = global.db.groups.find(v => v.jid == jid)
            let time = set.stay ? 'FOREVER' : (set.expired == 0 ? 'NOT SET' : Func.timeReverse(set.expired - new Date() * 1))
            let member = groupMetadata.participants.map(u => u.id).length
            let pic = await client.profilePictureUrl(jid, 'image')
            let data = {
               name: groupName,
               member,
               time,
               set,
               admin
            }
            return client.sendMessageModify(m.chat, steal(Func, data) + '\n\n' + global.footer, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer(pic)
            })
         } else if (dial == 9) {
            global.db.groups.find(v => v.jid == jid).expired = 0
            global.db.groups.find(v => v.jid == jid).stay = false
            client.reply(m.chat, Func.texted('bold', `🚩 Duration of bot in the ${groupName} group has been successfully reset.`), m)
         }
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['gc', 'modify'],
   owner: true
}, __filename)

const steal = (Func, data) => {
   return `乂  *S T E A L E R*

	◦  *Name* : ${data.name}
	◦  *Member* : ${data.member}
	◦  *Expired* : ${data.time}
	◦  *Status* : ${Func.switcher(data.set.mute, 'OFF', 'ON')}
	◦  *Bot Admin* : ${Func.switcher(data.admin, '√', '×')}`
}
