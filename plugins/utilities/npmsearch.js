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
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Package "${text}" not found`
	let txt = objects.map(({ package: pkg }) => {
        let jo = '*Package Name : *' + pkg.name + '\n'
        jo += '*Version : *' + pkg.version + '\n'
        jo += '*Link : *' + pkg.links.npm + '\n'
        jo += '*Description : *' + pkg.description + '\n'
		return jo
	}).join`\n\n`
	m.reply(txt)
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['npmseacrch'],
   use: 'query',
   category: 'utilities',
   limit: 1,
}, __filename)
