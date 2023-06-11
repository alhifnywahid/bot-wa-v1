const fs = require('fs')
neoxr.create(async (m, {
   client,
   text,
   prefix,
   Func
}) => {
   try {
      client.menu = client.menu ? client.menu : {}
      const id = m.chat
      const plugins = neoxr.plugins.filter(v => !global.db.setting.pluginDisable.includes(v.pluginName))
      const local_size = fs.existsSync('./' + global.database + '.json') ? await Func.getSize(fs.statSync('./' + global.database + '.json').size) : ''
      const library = JSON.parse(require('fs').readFileSync('./package.json', 'utf-8'))
      const message = global.db.setting.msg.replace('+tag', `@${m.sender.replace(/@.+/g, '')}`).replace('+name', m.pushName).replace('+greeting', Func.greeting()).replace('+db', (process.env.DATABASE_URL ? 'Mongo' : `Local (${local_size})`)).replace('+version', (library.dependencies.bails ? library.dependencies.bails : library.dependencies['@adiwajshing/baileys'] ? '@adiwajshing/baileys' : library.dependencies.baileys).replace('^', '').replace('~', ''))
      const style = global.db.setting.menuStyle
      if (style == 1) {
         if (text) {
            let cmd = plugins.filter(v => v.usage && v.category == text.toLowerCase())
            if (cmd.length == 0) return client.reply(m.chat, Func.texted('bold', `🚩 Category not available.`), m)
            let commands = []
            cmd.map(v => {
               switch (v.usage.constructor.name) {
                  case 'Array':
                     v.usage.map(x => commands.push({
                        usage: x,
                        use: v.use ? Func.texted('bold', v.use) : ''
                     }))
                     break
                  case 'String':
                     commands.push({
                        usage: v.usage,
                        use: v.use ? Func.texted('bold', v.use) : ''
                     })
               }
            })
            const print = commands.sort((a, b) => a.usage.localeCompare(b.usage)).map(v => `◦  ${prefix + v.usage} ${v.use}`).join('\n')
            return m.reply(Func.Styles(print))
         } else {
            let cmd = plugins.filter(v => v.usage && v.category)
            let category = []
            for (let obj of cmd) {
               if (!obj.category) continue
               if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj)
               else {
                  category[obj.category] = []
                  category[obj.category].push(obj)
               }
            }
            let rows = []
            const keys = Object.keys(category).sort()
            for (let k of keys) {
               rows.push({
                  title: k.toUpperCase(),
                  rowId: `${prefix}menutype ${k}`,
                  description: ``
               })
            }
            client.sendList(m.chat, '', message, global.botname, 'Tap!', [{
               rows
            }], m)
         }
      } else if (style == 2) {
         let cmd = plugins.filter(v => v.usage && v.category)
         let category = []
         for (let obj of cmd) {
            if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj)
            else {
               category[obj.category] = []
               category[obj.category].push(obj)
            }
         }
         const keys = Object.keys(category).sort()
         let print = message
         print += '\n' + String.fromCharCode(8206).repeat(4001)
         for (let k of keys) {
            print += '\n\n乂  *' + k.toUpperCase().split('').map(v => v).join(' ') + '*\n\n'
            let cmd = plugins.filter(v => v.usage && v.category == k.toLowerCase())
            if (cmd.length == 0) return
            let commands = []
            cmd.map(v => {
               switch (v.usage.constructor.name) {
                  case 'Array':
                     v.usage.map(x => commands.push({
                        usage: x,
                        use: v.use ? Func.texted('bold', v.use) : ''
                     }))
                     break
                  case 'String':
                     commands.push({
                        usage: v.usage,
                        use: v.use ? Func.texted('bold', v.use) : ''
                     })
               }
            })
            print += commands.sort((a, b) => a.usage.localeCompare(b.usage)).map(v => `	◦  ${prefix + v.usage} ${v.use}`).join('\n')
         }
         client.menu[id] = [
            await client.sendMessageModify(m.chat, print + '\n\n' + global.footer, m, {
               ads: false,
               largeThumb: true,
               url: global.db.setting.link
            }),
            setTimeout(() => {
               delete client.menu[id]
            }, 180000)
         ]
      } else if (style == 3) {
         if (text) {
            let cmd = plugins.filter(v => v.usage && v.category == text.toLowerCase())
            if (cmd.length == 0) return client.reply(m.chat, Func.texted('bold', `🚩 Category not available.`), m)
            let commands = []
            cmd.map(v => {
               switch (v.usage.constructor.name) {
                  case 'Array':
                     v.usage.map(x => commands.push({
                        usage: x,
                        use: v.use ? Func.texted('bold', v.use) : ''
                     }))
                     break
                  case 'String':
                     commands.push({
                        usage: v.usage,
                        use: v.use ? Func.texted('bold', v.use) : ''
                     })
               }
            })
            const print = commands.sort((a, b) => a.usage.localeCompare(b.usage)).map((v, i) => {
               if (i == 0) {
                  return `┌  ◦  ${prefix + v.usage} ${v.use}`
               } else if (i == commands.sort((a, b) => a.usage.localeCompare(b.usage)).length - 1) {
                  return `└  ◦  ${prefix + v.usage} ${v.use}`
               } else {
                  return `│  ◦  ${prefix + v.usage} ${v.use}`
               }
            }).join('\n')
            return m.reply(Func.Styles(print, 1))
         } else {
            let cmd = plugins.filter(v => v.usage && v.category)
            let category = []
            for (let obj of cmd) {
               if (!obj.category) continue
               if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj)
               else {
                  category[obj.category] = []
                  category[obj.category].push(obj)
               }
            }
            let rows = []
            const keys = Object.keys(category).sort()
            for (let k of keys) {
               rows.push({
                  title: k.toUpperCase(),
                  rowId: `${prefix}menutype ${k}`,
                  description: ``
               })
            }
            client.sendList(m.chat, '', Func.Styles(message, 1), global.botname, 'Tap!', [{
               rows
            }], m)
         }
      } else if (style == 4) {
         let cmd = plugins.filter(v => v.usage && v.category)
         let category = []
         for (let obj of cmd) {
            if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj)
            else {
               category[obj.category] = []
               category[obj.category].push(obj)
            }
         }
         const keys = Object.keys(category).sort()
         let print = message
         print += '\n' + String.fromCharCode(8206).repeat(4001)
         for (let k of keys) {
            print += '\n\n –  *' + k.toUpperCase().split('').map(v => v).join(' ') + '*\n\n'
            let cmd = plugins.filter(v => v.usage && v.category == k.toLowerCase())
            if (cmd.length == 0) return
            let commands = []
            cmd.map(v => {
               switch (v.usage.constructor.name) {
                  case 'Array':
                     v.usage.map(x => commands.push({
                        usage: x,
                        use: v.use ? Func.texted('bold', v.use) : ''
                     }))
                     break
                  case 'String':
                     commands.push({
                        usage: v.usage,
                        use: v.use ? Func.texted('bold', v.use) : ''
                     })
               }
            })
            print += commands.sort((a, b) => a.usage.localeCompare(b.usage)).map((v, i) => {
               if (i == 0) {
                  return `┌  ◦  ${prefix + v.usage} ${v.use}`
               } else if (i == commands.sort((a, b) => a.usage.localeCompare(b.usage)).length - 1) {
                  return `└  ◦  ${prefix + v.usage} ${v.use}`
               } else {
                  return `│  ◦  ${prefix + v.usage} ${v.use}`
               }
            }).join('\n')
         }
         client.menu[id] = [
            await client.sendMessageModify(m.chat, Func.Styles(print, 1) + '\n\n' + global.footer, m, {
               ads: false,
               largeThumb: true,
               url: global.db.setting.link
            }),
            setTimeout(() => {
               delete client.menu[id]
            }, 180000)
         ]
      }  else if (style == 5) {
         let cmd = plugins.filter(v => v.usage && v.category);
         let category = [];
         for (let obj of cmd) {
            if (Object.keys(category).includes(obj.category)) category[obj.category].push(obj);
            else {
               category[obj.category] = [];
               category[obj.category].push(obj);
            }
         }
         const keys = Object.keys(category).sort();
         let print = message;
         print += '\n\n*Ⓟ : Fitur untuk premium.*\n';
         print += '*Ⓛ : Fitur menggunakan limit.*';
         print += '\n' + String.fromCharCode(8206).repeat(4001);
         for (let k of keys) {
            print += '\n\n么  *' + k.toUpperCase().split('').map(v => v).join(' ') + '*\n\n';
            let cmd = plugins.filter(v => v.usage && v.category == k.toLowerCase());
            if (cmd.length == 0) return;
            let commands = [];
            cmd.map(v => {
               switch (typeof v.usage) {
                  case 'object':
                     v.usage.map(x => commands.push({
                        usage: x,
                        use: v.use ? Func.texted('bold', v.use) : '',
                        premium: v.premium ? Func.texted('bold', 'Ⓟ') : '',
                        limit: v.limit ? Func.texted('bold', 'Ⓛ') : ''
                     }));
                     break;
                  case 'string':
                     commands.push({
                        usage: v.usage,
                        use: v.use ? Func.texted('bold', v.use) : '',
                        premium: v.premium ? Func.texted('bold', 'Ⓟ') : '',
                        limit: v.limit ? Func.texted('bold', 'Ⓛ') : ''
                     });
                     break;
               }
            });
            print += commands.sort((a, b) => a.usage.localeCompare(b.usage)).map(v => `  ◦  ${prefix + v.usage} ${v.use} ${v.premium} ${v.limit}`).join('\n');
         }
         client.menu[id] = [
            await client.sendMessageModify(m.chat, print + '\n\n' + global.footer, m, {
               ads: false,
               largeThumb: true,
               url: global.db.setting.link
            }),
            setTimeout(() => {
               delete client.menu[id];
            }, 180000)
         ];
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['menu'],
   hidden: ['command', 'help', 'menutype']
}, __filename)
