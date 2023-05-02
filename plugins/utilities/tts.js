import gtts from 'node-gtts'
import { tmpdir } from 'os'
import { unlinkSync } from 'fs'
import { join } from 'path'
neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
   }) => {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, 'id i love him'), m)
      if (text && m.quoted && m.quoted.text) {
         let lang = text.slice(0, 2)
         try {
            let data = m.quoted.text
            let tts = gtts(lang)
            let filePath = join(tmpdir(), Func.filename('mp3'))
            tts.save(filePath, data, async () => {
               client.sendFile(m.chat, await Func.fetchBuffer(filePath), 'audio.mp3', '', m)
               unlinkSync(filePath)
            })
         } catch {
            return client.reply(m.chat, Func.texted('bold', `🚩 Language code not supported.`), m)
         }
      } else if (text) {
         let lang = text.slice(0, 2)
         try {
            let data = text.substring(2).trim()
            let tts = gtts(lang)
            let filePath = join(tmpdir(), Func.filename('mp3'))
            tts.save(filePath, data, async () => {
               client.sendFile(m.chat, await Func.fetchBuffer(filePath), 'audio.mp3', '', m)
               unlinkSync(filePath)
            })
         } catch (e) {
            console.log(e)
            return client.reply(m.chat, Func.texted('bold', `🚩 Language code not supported.`), m)
         }
      }
}, {
   usage: ['tts'],
   use: 'iso text',
   category: 'utilities',
   error: false,
   limit: true
}, __filename)
