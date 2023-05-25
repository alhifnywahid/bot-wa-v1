neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   Func
}) => {
   try {
      if (!args || !args[0]) return
      if (command == 'set') {
         let jid = args[0]
         let duration = args[1]

         if (!duration) {
            return client.reply(m.chat, "Please provide a duration for the group expiration.", m)
         }

         let day = parseInt(duration.toLowerCase().replace('d', ''))
         if (isNaN(day) || ![1, 7, 30, 60, 90, 180, 270, 365].includes(day)) {
            return client.reply(m.chat, "Invalid duration. Please choose from 1d, 7d, 30d, 60d, 90d, 180d, 270d, or 365d.", m)
         }

         let expiration = day * 24 * 60 * 60 * 1000 // Convert days to milliseconds

         global.db.groups.find(v => v.jid == jid).expired = expiration
         global.db.groups.find(v => v.jid == jid).stay = false

         return client.reply(m.chat, Func.texted('bold', `✅ Successfully set the expiration of the group to ${duration} in ${await (await client.groupMetadata(jid)).subject} group.`), m)
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['set'],
   owner: true
}, __filename)
