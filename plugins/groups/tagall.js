neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   participants,
   Func
}) => {
   try {
let member = participants.map(v => v.id)
         let readmore = String.fromCharCode(8206).repeat(4001)
         let message = (!text) ? 'Hello everyone, admin mention you in ' + await (await client.groupMetadata(m.chat)).subject + ' group.' : text
         client.reply(m.chat, `乂  *E V E R Y O N E*\n\n*“${message}”*\n${readmore}\n${member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')}`, m)
         } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['tagall'],
   hidden: ['everyone'],
   category: 'group',
   admin: true,
   group: true
}, __filename)