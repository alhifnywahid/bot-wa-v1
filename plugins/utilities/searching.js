const yts = require('yt-search')
neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func,
   Scraper
}) => {
   try {
      if (command == 'apk') {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'fb lite'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.apk(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let rows = []
         json.data.map(async (v, i) => {
            rows.push({
               title: v.name,
               rowId: `${prefix}getapk ${text}—${v.no}`,
               description: `[ ${v.size} | ${v.version} ]`
            })
         })
         client.sendList(m.chat, '', `Showing search results for : “${text}”, select below the application you want to download. 🍟`, '', 'Tap!', [{
            rows
         }], m)
      } else if (command == 'getapk') {
         if (!text) return client.reply(m.chat, global.status.invalid, m)
         let [query, no] = text.split`—`
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.apk(query, no)
         let teks = `乂  *P L A Y S T O R E*\n\n`
         teks += '	◦  *Name* : ' + json.data.name + '\n'
         teks += '	◦  *Version* : ' + json.data.version + '\n'
         teks += '	◦  *Size* : ' + json.file.size + '\n'
         teks += '	◦  *Category* : ' + json.data.category + '\n'
         teks += '	◦  *Developer* : ' + json.data.developer + '\n'
         teks += '	◦  *Requirement* : ' + json.data.requirement + '\n'
         teks += '	◦  *Publish* : ' + json.data.publish + '\n'
         teks += '	◦  *Link* : ' + json.data.playstore + '\n\n'
         teks += global.footer
         let chSize = Func.sizeLimit(json.file.size, global.max_upload)
         if (chSize.oversize) return client.reply(m.chat, `💀 File size (${json.file.size}) exceeds the maximum limit, download it by yourself via this link : ${await (await Scraper.shorten(json.file.url)).data.url}`, m)
         client.sendMessageModify(m.chat, teks, m, {
            ads: false,
            largeThumb: true,
            thumbnail: await Func.fetchBuffer(json.data.thumbnail)
         }).then(() => client.sendFile(m.chat, json.file.url, json.file.filename, '', m))
      } else if (command == 'apkmod') {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'fb lite'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.apkmod(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let rows = []
         json.data.map(async (v, i) => {
            rows.push({
               title: v.name,
               rowId: `${prefix}getapkmod ${text}—${v.no}`,
               description: `[ ${v.version} | ${v.mod} ]`
            })
         })
         client.sendList(m.chat, '', `Showing search results for : “${text}”, select below the application you want to download. 🍟`, '', 'Tap!', [{
            rows
         }], m)
      } else if (command == 'getapkmod') {
         if (!text) return client.reply(m.chat, global.status.invalid, m)
         let [query, no] = text.split`—`
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.apkmod(query, no)
         if (!json.status) return m.reply(Func.jsonFormat(json))          
         let teks = `乂  *A P K M O D*\n\n`  
         teks += '◦  *Name* : ' + json.data.name + '\n'
         teks += '◦  *Version* : ' + json.data.version + '\n'
         teks += '◦  *Size* : ' + json.data.size + '\n'
         teks += '◦  *Mod* : ' + json.data.mod + '\n'
         teks += '◦  *Rating* : ' + json.data.rating + '\n'
         teks += '◦  *Publish* : ' + json.data.publish + '\n\n'
         teks += global.footer
         let chSize = Func.sizeLimit(json.data.size, global.max_upload)
         if (chSize.oversize) return client.reply(m.chat, `💀 File size (${json.data.size}) exceeds the maximum limit, download it by yourself via this link : ${await (await Scraper.shorten(json.file.url)).data.url}`, m)
         client.sendMessageModify(m.chat, teks, m, {
            ads: false,
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/43cb96b21375d2182d405.jpg')
         }).then(() => client.sendFile(m.chat, json.file.url, json.file.filename, '', m))
      } else if (command == 'chord') {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'lathi'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.chord(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         client.reply(m.chat, json.data.chord, m)
      } else if (command == 'lirik') {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'lathi'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.lyric(text.trim())
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         if (text.startsWith('https')) return client.reply(m.chat, json.data.lyric, m)
         let rows = []
         json.data.map(v => rows.push({
            title: v.title,
            rowId: `${prefix + command} ${v.url}`,
            description: ``
         }))
         client.sendList(m.chat, '', `Showing search results for : “${text}” 🍟`, '', 'Tap!', [{
            rows
         }], m)
      } else if (command == 'pinterest2') {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'cat'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         let json = await Api.pinterest(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         for (let i = 0; i < 3; i++) {
            var rand = Math.floor(json.data.length * Math.random())
            client.sendFile(m.chat, json.data[rand].url, '', `🍟 *Fetching* : ${((new Date - old) * 1)} ms`, m)
            await Func.delay(2000)
         }
      } else if (command == 'google') {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'cat'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.google(text)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         let teks = `乂  *G O O G L E - S E A R C H*\n\n`
         json.data.map((v, i) => {
            teks += '*' + (i + 1) + '. ' + v.title + '*\n'
            teks += '	◦  *Snippet* : ' + v.description + '\n'
            teks += '	◦  *Link* : ' + v.url + '\n\n'
         })
         client.sendMessageModify(m.chat, teks + global.footer, m, {
            ads: false,
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/d7b761ea856b5ba7b0713.jpg')
         })
      } else if (command == 'goimg') {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'cat'), m)
         let json = await Api.google(text, true)
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         for (let i = 0; i < 5; i++) {
            var rand = Math.floor(json.data.length * Math.random())
            let caption = `乂  *G O O G L E - I M A G E*\n\n`
            caption += `	◦ *Title* : ${json.data[i].origin.title}\n`
            caption += `	◦ *Dimensions* : ${json.data[i].width} × ${json.data[i].height}\n\n`
            caption += global.footer
            client.sendFile(m.chat, json.data[rand].url, '', caption, m)
            await Func.delay(2500)
         }
      } else if (/yts|ytsearch|ytfind/.test(command)) {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'lathi'), m)
         client.sendReact(m.chat, '🕒', m.key)
         const search = await (await yts(text)).all
         if (search.length == 0) return client.reply(m.chat, global.status.fail, m)
         let mp3 = [],
            mp4 = []
         search.map(v => {
            mp3.push({
               views: v.views,
               title: v.title,
               rowId: `${prefix}yta ${v.url}`,
               description: `[ MP3 – Duration : ${v.timestamp} – Views : ${Func.h2k(Func.formatter(v.views))} ]`
            })
            mp4.push({
               views: v.views,
               title: v.title,
               rowId: `${prefix}ytv ${v.url}`,
               description: `[ MP4 – Duration : ${v.timestamp} – Views : ${Func.h2k(Func.formatter(v.views))} ]`
            })
         })
         let rows = mp3.concat(mp4).sort((a, b) => b.views - a.views)
         client.sendList(m.chat, '', `Showing search results for : “${text}”, choose below according to the format you want. 🍟`, '', 'Tap!', [{
            rows
         }], m)
      }
   } catch (e) {
      client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['chord', 'lirik', 'google', 'goimg', 'ytsearch', 'apk', 'apkmod'],
   hidden: ['yts', 'pinterest2', 'ytfind', 'getapk', 'getapkmod'],
   use: 'query',
   category: 'utilities',
   premium: true,
   limit: true
}, __filename)
