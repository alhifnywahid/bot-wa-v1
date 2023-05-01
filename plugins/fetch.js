const fs = require('fs')
const axios = require('axios')
neoxr.create(async (m, {
   client,
   args,
   text,
   prefix,
   command,
   drive,
   Func
}) => {
   try {
      if (/get|fetch/i.test(command)) {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, global.db.setting.cover), m)
         client.sendReact(m.chat, '🕒', m.key)
         if (args[0].match('drive.google.com')) {
            let old = new Date()
            const response = await drive.getFile(args[0])
            if (!response.status && response.msg == 'Invalid Credentials') {
               drive.AuthClient.refreshAccessToken((error, token) => {
                  if (error) return m.reply(Func.jsonFormat(error))
                  drive.AuthClient.setCredentials({
                     refresh_token: token.refresh_token,
                     access_token: token.access_token
                  })
               })
               await Func.delay(1500)
               try {
                  const retry = await drive.getFile(args[0])
                  if (!retry.status) return client.reply(m.chat, global.status.fail, m)
                  let json = await Func.getFile(Buffer.from(retry.data.chunk))
                  let chSize = Func.sizeLimit(json.size, global.max_upload)
                  if (chSize.oversize) return client.reply(m.chat, `💀 Ukuran file (${json.size}) melebihi batas maksimum. Maaf kami tidak dapat mengunggah file.`, m)
                  client.sendFile(m.chat, fs.readFileSync(json.file), '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
               } catch {
                  client.reply(m.chat, Func.texted('bold', `🚩 Tidak dapat mengunduh, mungkin akses file bukan untuk umum.`), m)
               }
            } else {
               if (!response.status) return client.reply(m.chat, global.status.fail, m)
               let json = await Func.getFile(Buffer.from(response.data.chunk))
               let chSize = Func.sizeLimit(json.size, global.max_upload)
               if (chSize.oversize) return client.reply(m.chat, `💀 Ukuran file (${json.size}) melebihi batas maksimum. Maaf kami tidak dapat mengunggah file.`, m)
               client.sendFile(m.chat, fs.readFileSync(json.file), '', `🍟 *Process* : ${((new Date - old) * 1)} ms`, m)
            }
         } else if (args[0].match('github.com')) {
            let username = args[0].split(`/`)[3]
            let repository = args[0].split(`/`)[4]
            let zipball = 'https://api.github.com/repos/${username.trim()}/${repository.trim()}/zipball'
            client.sendFile(m.chat, zipball, `${repository}.zip`, '', m)
         } else {
            const fetch = await axios.get(args[0], {
               headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Referer": "https://www.google.com/",
                  "Referrer-Policy": "strict-origin-when-cross-origin",
                  "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
               }
            })
            if (/json/i.test(fetch.headers['content-type'])) return m.reply(Func.jsonFormat(fetch.data))
            if (/text/i.test(fetch.headers['content-type'])) return m.reply(fetch.data)
            client.sendFile(m.chat, args[0], '', '', m)
         }
      } else if (/tt|tik(tok|wm|mp3)?/.test(command)) {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(prefix, command, 'https://vm.tiktok.com/ZSR7c5G6y/'), m)
         if (!args[0].match('tiktok.com')) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         let json = await Api.tiktok(Func.ttFixed(args[0]))
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         if (command == 'tiktok' || command == 'tt') return client.sendFile(m.chat, json.data.video, 'tiktok.mp4', `🍟 *Fetching* : ${((new Date - old) * 1)} ms`, m)
         if (command == 'tikwm') return client.sendButton(m.chat, json.data.videoWM, 'tiktok.mp4', `🍟 *Fetching* : ${((new Date - old) * 1)} ms`, ``, m)
         if (command == 'tikmp3') return !json.data.audio ? client.reply(m.chat, global.status.fail, m) : client.sendFile(m.chat, json.data.audio, 'audio.mp3', '', m)
      }
   } catch (e) {
      console.log(e)
      return client.reply(m.chat, e.message, m)
   }
}, {
   usage: ['fetch', 'tiktok', 'tikmp3', 'tikwm'],
   hidden: ['get', 'tt'],
   use: 'link',
   category: 'utilities',
   limit: true
}, __filename)
