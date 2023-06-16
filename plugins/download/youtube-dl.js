const yts = require('yt-search'),
   axios = require('axios')
neoxr.create(async (m, {
   client,
   args,
   text,
   prefix,
   command,
   Func,
   Scraper
}) => {
   try {
      if (command == 'yt') {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://youtu.be/zaRFmdtLhQ8'), m)
         if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(args[0])) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         const json = await Func.fetchJson('https://neoxr.cyclic.app/api/analyze?url=' + args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let sections = [{
            title: 'Audio',
            rows: []
         }, {
            title: 'Video',
            rows: []
         }]
         json.data.audio.map(v => sections[0].rows.push({
            title: `${v.quality} (${v.size})`,
            rowId: `${prefix}convert ${args[0]} audio ${v.quality}`,
            description: ``
         }))
         json.data.video.map(v => sections[1].rows.push({
            title: `${v.quality} (${v.size})`,
            rowId: `${prefix}convert ${args[0]} video ${v.quality}`,
            description: ``
         }))
         client.sendList(m.chat, '', `Choose type and quality 🍟`, '', 'Tap!', sections, m)
      } else if (command == 'convert') {
         if (!args) return client.reply(m.chat, Func.example(prefix, command, 'https://youtu.be/zaRFmdtLhQ8 video 480p'), m)
         client.sendReact(m.chat, '🕒', m.key)
         const json = await Func.fetchJson('https://neoxr.cyclic.app/api/fetch?url=' + args[0] + '&type=' + args[1] + '&quality=' + args[2])
         if (!json.status || !json.data.url) return client.reply(m.chat, Func.jsonFormat(json), m)
         if (json.data.extension == 'mp3') {
            let caption = `乂  *Y T - P L A Y*\n\n`
            caption += `	◦  *Title* : ${json.title}\n`
            caption += `	◦  *Size* : ${json.data.size}\n`
            caption += `	◦  *Duration* : ${json.duration}\n`
            caption += `	◦  *Bitrate* : ${json.data.quality}\n\n`
            caption += global.footer
            let chSize = Func.sizeLimit(json.data.size, global.max_upload)
            if (chSize.oversize) return client.reply(m.chat, `💀 File size (${json.data.size}) exceeds the maximum limit, download it by yourself via this link : ${await (await Func.shorten(json.data.url)).data.url}`, m)
            client.sendMessageModify(m.chat, caption, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer(json.thumbnail)
            }).then(async () => {
               const result = await Func.getFile(await (await axios.get(json.data.url, {
                  responseType: 'arraybuffer',
                  headers: {
                     referer: 'https://y2mate.com'
                  }
               })).data)
               client.sendFile(m.chat, './' + result.file, json.data.filename, '', m, {
                  document: true,
                  APIC: await Func.fetchBuffer(json.thumbnail)
               })
            })
         } else if (json.data.extension == 'mp4') {
            let caption = `乂  *Y T - M P 4*\n\n`
            caption += `	◦  *Title* : ${json.title}\n`
            caption += `	◦  *Size* : ${json.data.size}\n`
            caption += `	◦  *Duration* : ${json.duration}\n`
            caption += `	◦  *Quality* : ${json.data.quality}\n\n`
            caption += global.footer
            let chSize = Func.sizeLimit(json.data.size, global.max_upload)
            if (chSize.oversize) return client.reply(m.chat, `💀 File size (${json.data.size}) exceeds the maximum limit, download it by yourself via this link : ${await (await Scraper.shorten(json.data.url)).data.url}`, m)
            const result = await Func.getFile(await (await axios.get(json.data.url, {
               responseType: 'arraybuffer',
               headers: {
                  referer: 'https://y2mate.com'
               }
            })).data)
            let isSize = (json.data.size).replace(/MB/g, '').trim()
            if (isSize > 99) return client.sendMessageModify(m.chat, caption, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer(json.thumbnail)
            }).then(async () => await client.sendFile(m.chat, './' + result.file, json.data.filename, '', m, {
               document: true
            }))
            client.sendFile(m.chat, './' + result.file, json.data.filename, caption, m)
         } else m.reply(Func.jsonFormat(json))
      } else if (/yt?(a|mp3)/i.test(command)) {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://youtu.be/zaRFmdtLhQ8'), m)
         if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(args[0])) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         const json = await Func.fetchJson('https://neoxr.cyclic.app/api/yta?url=' + args[0])
         if (!json.status || !json.data.url) return client.reply(m.chat, Func.jsonFormat(json), m)
         let caption = `乂  *Y T - P L A Y*\n\n`
         caption += `	◦  *Title* : ${json.title}\n`
         caption += `	◦  *Size* : ${json.data.size}\n`
         caption += `	◦  *Duration* : ${json.duration}\n`
         caption += `	◦  *Bitrate* : ${json.data.quality}\n\n`
         caption += global.footer
         let chSize = Func.sizeLimit(json.data.size, global.max_upload)
         if (chSize.oversize) return client.reply(m.chat, `💀 File size (${json.data.size}) exceeds the maximum limit, download it by yourself via this link : ${await (await Func.shorten(json.data.url)).data.url}`, m)
         client.sendMessageModify(m.chat, caption, m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer(json.thumbnail)
         }).then(async () => {
            const result = await Func.getFile(await (await axios.get(json.data.url, {
               responseType: 'arraybuffer',
               headers: {
                  referer: 'https://y2mate.com'
               }
            })).data)
            client.sendFile(m.chat, './' + result.file, json.data.filename, '', m, {
               document: true,
               APIC: await Func.fetchBuffer(json.thumbnail)
            })
         })
      } else if (/yt?(v|mp4)/i.test(command)) {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://youtu.be/zaRFmdtLhQ8'), m)
         if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(args[0])) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         const json = await Func.fetchJson('https://neoxr.cyclic.app/api/analyze?url=' + args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let rows = []
         json.data.video.map(v => rows.push({
            title: `${v.quality} (${v.size})`,
            rowId: `${prefix}convert ${args[0]} video ${v.quality}`,
            description: ``
         }))
         client.sendList(m.chat, '', `Choose quality you want 🍟`, '', 'Tap!', [{
            rows
         }], m)
      }
   } catch (e) {
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['ytmp3', 'ytmp4'],
   hidden: ['convert', 'yt', 'yta', 'ytv'],
   use: 'link',
   category: 'searching',
   premium: true,
   limit: true
}, __filename)
