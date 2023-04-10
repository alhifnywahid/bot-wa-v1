neoxr.create(async (m, {
   client,
   body,
   users,
   isOwner,
   isAdmin,
   isBotAdmin,
   groupSet,
   setting,
   Func
}) => {
   try {
      // Anti Link
      if (groupSet.antilink && !isAdmin && body) {
         if (body.match(/(chat.whatsapp.com)/gi) && !body.includes(await client.groupInviteCode(m.chat))) return client.sendMessage(m.chat, {
            delete: {
               remoteJid: m.chat,
               fromMe: false,
               id: m.key.id,
               participant: m.sender
            }
         }).then(() => client.groupParticipantsUpdate(m.chat, [m.sender], 'remove'))
      }
      
      // Anti Tagall / Hidetag
      if (!isOwner && !isAdmin && !m.isBot && m.mentionedJid.length > 10) return client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')

      // Anti Virtex
      if (!m.fromMe && body && (groupSet.antivirtex && body.match(/(৭৭৭৭৭৭৭৭|๒๒๒๒๒๒๒๒|๑๑๑๑๑๑๑๑|ดุท้่เึางืผิดุท้่เึางื)/gi) || groupSet.antivirtex && body.length > 10000)) return client.sendMessage(m.chat, {
         delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.sender
         }
      }).then(() => client.groupParticipantsUpdate(m.chat, [m.sender], 'remove'))

      // Anti Toxic (Filter)
      if (groupSet.filter && !isAdmin && isBotAdmin && !m.fromMe && !users.premium) {
         let toxic = setting.toxic
         if (body && (new RegExp('\\b' + toxic.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {
            groupSet.member[m.sender].warning += 1
            let warning = groupSet.member[m.sender].warning
            if (warning > 4) return client.reply(m.chat, Func.texted('bold', `🚩 Warning : [ 5 / 5 ], good bye ~~`), m).then(() => {
               client.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then(async () => {
                  groupSet.member[m.sender].warning = 0
                  client.sendMessage(m.chat, {
                     delete: {
                        remoteJid: m.chat,
                        fromMe: isBotAdmin ? false : true,
                        id: m.key.id,
                        participant: m.sender
                     }
                  })
               })
            })
            return client.reply(m.chat, `乂  *W A R N I N G* \n\nYou got warning : [ ${warning} / 5 ]\n\If you get 5 warnings you will be kicked automatically from the group.`, m).then(() => client.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,
                  fromMe: isBotAdmin ? false : true,
                  id: m.key.id,
                  participant: m.sender
               }
            }))
         }
      }
   } catch (e) {
      console.log(e)
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   group: true,
   botAdmin: true
}, __filename)