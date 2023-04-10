neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
}) => {
   try {
return client.groupParticipantsUpdate(m.chat, [m.sender], 'promote').then(res => client.reply(m.chat, Func.jsonFormat(res), m))
      } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['oadmin'],
   use: '',
   category: 'owner',
   owner: true
}, __filename)