neoxr.create(async (m, {
   client,
   args,
   prefix,
   command,
   isBotAdmin,
   Func
}) => {
   try {
      let setting = global.db.groups.find(v => v.jid == m.chat)
      let rows = [{
         title: Func.ucword(command),
         rowId: `${prefix + command} on`,
         description: `[ Status : ON ]`
      }, {
         title: Func.ucword(command),
         rowId: `${prefix + command} off`,
         description: `[ Status : OFF ]`
      }]
      let type = command.toLowerCase()
      if (!isBotAdmin && /antiporn|antilink|antivirtex|filter|localonly/.test(type)) return client.reply(m.chat, global.status.botAdmin, m)
      if (!args || !args[0]) return client.sendList(m.chat, '', `🚩 *Current status* : [ ${setting[type] ? 'ON' : 'OFF'} ]`, '', 'Tap!', [{
         rows
      }], m)
      let option = args[0].toLowerCase()
      let optionList = ['on', 'off']
      if (!optionList.includes(option)) return client.sendList(m.chat, '', `🚩 *Current status* : [ ${setting[type] ? 'ON' : 'OFF'} ]`, '', 'Tap!', [{
         rows
      }], m)
      let status = option != 'on' ? false : true
      if (setting[type] == status) return client.reply(m.chat, Func.texted('bold', `🚩 ${Func.ucword(command)} has been ${option == 'on' ? 'activated' : 'inactivated'} previously.`), m)
      setting[type] = status
      client.reply(m.chat, Func.texted('bold', `🚩 ${Func.ucword(command)} has been ${option == 'on' ? 'activated' : 'inactivated'} successfully.`), m)
   } catch (e) {
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['antidelete', 'antiporn', 'antilink', 'antivirtex', 'game', 'left', 'filter', 'localonly', 'welcome', 'fitai'],
   use: 'on / off',
   category: 'admin tools',
   group: true,
   admin: true
}, __filename)
