neoxr.create(async (m, {
   args,
   prefix,
   command,
   Func
   }) => {
      let gc = global.db.groups.find(v => v.jid == m.chat)
      let opt = [0, 1]
      let rows = [{
         title: 'True',
         rowId: `${prefix + command} 1`,
         description: ``
      }, {
         title: 'False',
         rowId: `${prefix + command} 0`,
         description: ``
      }]
      if (!args || !args[0] || !opt.includes(parseInt(args[0]))) return client.sendList(m.chat, '', `🚩 *Current status* : [ ${gc.mute ? 'True' : 'False'} ]`, '', 'Tap!', [{ rows }], m)
      if (parseInt(args[0]) == 1) {
         if (gc.mute) return client.reply(m.chat, Func.texted('bold', `🚩 Previously muted.`), m)
         gc.mute = true
         client.reply(m.chat, Func.texted('bold', `🚩 Successfully muted.`), m)
      } else if (parseInt(args[0]) == 0) {
         if (!gc.mute) return client.reply(m.chat, Func.texted('bold', `🚩 Previously unmuted.`), m)
         gc.mute = false
         client.reply(m.chat, Func.texted('bold', `🚩 Successfully unmuted.`), m)
      }
}, {
   usage: ['mute'],
   use: '0 / 1',
   category: 'admin tools',
   group: true,
   admin: true
}, __filename)
