neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
   }) => {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, '2 * 5'), m)
      let val = text
         .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
         .replace(/×/g, '*')
         .replace(/÷/g, '/')
         .replace(/π|pi/gi, 'Math.PI')
         .replace(/e/gi, 'Math.E')
         .replace(/\/+/g, '/')
         .replace(/\++/g, '+')
         .replace(/-+/g, '-')
      let format = val
         .replace(/Math\.PI/g, 'π')
         .replace(/Math\.E/g, 'e')
         .replace(/\//g, '÷')
         .replace(/\*×/g, '×')
      try {
         let result = (new Function('return ' + val))()
         if (!result) return client.reply(m.chat, result, m)
         client.reply(m.chat, `*${format}* = ${result}`, m)
      } catch (e) {
         if (e == undefined) return client.reply(m.chat, Func.example(isPrefix, command, '2 * 5'), m)
         return client.reply(m.chat, Func.example(isPrefix, command, '2 * 5'), m)
      }
}, {
   usage: ['calc'],
   hidden: ['c'],
   use: 'expression',
   category: 'utilities',
   error: false
}, __filename)
