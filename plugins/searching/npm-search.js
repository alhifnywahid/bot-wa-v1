const fetch = require('node-fetch')
neoxr.create(async (m, {
   command,
   text,
   prefix,
   client,
   args,
   Func
}) => {
   try {
    if (!text) return client.reply(m.chat, Func.example(prefix, command, 'list'), m)
    client.sendReact(m.chat, '🕒', m.key)
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Package "${text}" not found`
	let txt = objects.map(({ package: pkg }) => {
        let jo = '*Package Name* : ' + pkg.name + '\n'
        jo += '*Version* : ' + pkg.version + '\n'
        jo += '*Link* : ' + pkg.links.npm + '\n'
        jo += '*Description* : ' + pkg.description + '\n'
		return jo
	}).join`\n`
   let final = '*么 N P M  S E A R C H*\n\n'
   final += txt
	client.reply(m.chat, final, m)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['npmsearch'],
   use: 'query',
   category: 'searching',
   limit: 1,
}, __filename)
