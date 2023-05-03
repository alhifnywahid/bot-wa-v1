const cp = require('child_process')
const promisify = require('util').promisify
const exec = promisify(cp.exec).bind(cp)
neoxr.create(async (m, {
   client,
   Func
}) => {
   try {
      client.sendReact(m.chat, '🕒', m.key)
      let o
      try {
         o = await exec('python speed.py')
      } catch (e) {
         o = e
      } finally {
         let {
            stdout,
            stderr
         } = o
         if (stdout.trim()) m.reply(stdout.trim())
         if (stderr.trim()) m.reply(stderr.trim())
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['ping'],
   hidden: ['pigggg'],
   category: 'miscs'
}, __filename)
