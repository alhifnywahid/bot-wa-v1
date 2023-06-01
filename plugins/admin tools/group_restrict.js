neoxr.create(async (m, {
   client,
   prefix,
   command,
   args,
   Func
}) => {
   try {
     if (!args || !args[0]) return client.reply(m.chat, Func.texted('bold', `🚩 Enter argument close or open.`), m)
      if (args[0] == 'open') {
         await client.groupSettingUpdate(m.chat, 'not_announcement')
      } else if (args[0] == 'close') {
         await client.groupSettingUpdate(m.chat, 'announcement') 
             }
         } catch (e) {
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['group'],
   use: 'close / open',
   category: 'admin tools',
   group: true,
   admin: true,
   botAdmin: true
}, __filename)
