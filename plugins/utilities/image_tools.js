neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func,
   Scraper
}) => {
   try {
      if (command == 'snobg') {
         let exif = global.db.setting
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            if (/image/.test(type)) {
               client.sendReact(m.chat, '🕒', m.key)
               let img = await client.downloadMediaMessage(q)
               let url = await Scraper.uploadImageV2(img)
               let remove = await Api.nobg(url.data.url)
               if (!remove.status) return m.reply(Func.jsonFormat(remove))
               await client.sendSticker(m.chat, await Func.fetchBuffer(remove.data.no_background), m, {
                  packname: exif.sk_pack,
                  author: exif.sk_author
               })
            } else client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, Func.texted('bold', `🚩 Reply photo.`), m)
            if (/image\/(jpe?g|png)/.test(mime)) {
               client.sendReact(m.chat, '🕒', m.key)
               let img = await q.download()
               let url = await Scraper.uploadImageV2(img)
               let remove = await Api.nobg(url.data.url)
               if (!remove.status) return m.reply(Func.jsonFormat(remove))
               await client.sendSticker(m.chat, await Func.fetchBuffer(remove.data.no_background), m, {
                  packname: exif.sk_pack,
                  author: exif.sk_author
               })
            } else return client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
         }
      } else if (command == 'nobg') {
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            if (/image/.test(type)) {
               let old = new Date()
               client.sendReact(m.chat, '🕒', m.key)
               let img = await client.downloadMediaMessage(q)
               let url = await Scraper.uploadImageV2(img)
               let remove = await Api.nobg(url.data.url)
               if (!remove.status) return m.reply(Func.jsonFormat(remove))
               client.sendFile(m.chat, remove.data.no_background, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
            } else client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, Func.texted('bold', `🚩 Reply photo.`), m)
            if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
            let old = new Date()
            client.sendReact(m.chat, '🕒', m.key)
            let img = await q.download()
            let url = await Scraper.uploadImageV2(img)
            let remove = await Api.nobg(url.data.url)
            if (!remove.status) return m.reply(Func.jsonFormat(remove))
            client.sendFile(m.chat, remove.data.no_background, '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
         }
      } else if (command == 'smeme') {
         let exif = global.db.setting
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'Hi | Dude'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let [top, bottom] = text.split`|`
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            if (/image/.test(type)) {
               let img = await client.downloadMediaMessage(q)
               let json = await Scraper.uploadImageV2(img)
               let res = `https://api.memegen.link/images/custom/${encodeURIComponent(top ? top : ' ')}/${encodeURIComponent(bottom ? bottom : '')}.png?background=${json.data.url}`
               await client.sendSticker(m.chat, res, m, {
                  packname: exif.sk_pack,
                  author: exif.sk_author
               })
            } else client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, Func.texted('bold', `🚩 Reply photo.`), m)
            if (/image\/(jpe?g|png)/.test(mime)) {
               let img = await q.download()
               let json = await Scraper.uploadImageV2(img)
               let res = `https://api.memegen.link/images/custom/${encodeURIComponent(top ? top : ' ')}/${encodeURIComponent(bottom ? bottom : '')}.png?background=${json.data.url}`
               await client.sendSticker(m.chat, res, m, {
                  packname: exif.sk_pack,
                  author: exif.sk_author
               })
            } else return client.reply(m.chat, Func.texted('bold', `🚩 Only for photo.`), m)
         }
      } else if (command == 'ocr') {
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            let img = await client.downloadMediaMessage(q)
            if (!/image/.test(type)) return client.reply(m.chat, Func.texted('bold', `🚩 Give a caption or reply to the photo with the ${prefix + command} command`), m)
            client.sendReact(m.chat, '🕒', m.key)
            const json = await Scraper.uploadImageV2(img)
            const result = await Api.ocr(json.data.url)
            if (!result.status) return m.reply(Func.jsonFormat(result))
            client.reply(m.chat, result.data.text, m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `🚩 Give a caption or reply to the photo with the ${prefix + command} command`), m)
            let img = await q.download()
            if (!img) return client.reply(m.chat, Func.texted('bold', `🚩 Give a caption or reply to the photo with the ${prefix + command} command`), m)
            client.sendReact(m.chat, '🕒', m.key)
            const json = await Scraper.uploadImageV2(img)
            const result = await Api.ocr(json.data.url)
            if (!result.status) return m.reply(Func.jsonFormat(result))
            client.reply(m.chat, result.data.text, m)
         }
      }
   } catch (e) {
      return client.reply(m.chat, Func.jsonFormat(e), m)
   }
}, {
   usage: ['snobg', 'nobg', 'smeme', 'ocr'],
   use: 'reply photo',
   category: 'utilities',
   premium: true,
   limit: true
}, __filename)
