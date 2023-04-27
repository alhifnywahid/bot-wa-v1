const { Configuration, OpenAIApi } = require('openai')
neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
}) => {
   try {
      if (command == 'brainly') {
         if (!text) return client.reply(m.chat, `${Func.texted('bold', `
         Fitur  ${command} :`)}
         • adalah fitur tanya jawab, dimana pengguna akan bertanya pada bot dan bot akan menjawab apa yang telah di tanyakan oleh user, bot hanya bisa menjawab pertanyaan text, jadi jika user bertanya dengan gambar BOT otomatis tidak mengerti
         
         ${Func.texted('bold', 'Cara Menggunakan fitur :')}
         ${Func.example(prefix, 'Perintah', '<isi pertanyaanmu>')}
         ${Func.example(prefix, command, 'Siapa penemu pesawat?')}
         
         ${Func.texted('bold', `Catatan`)}
         • Limit : √
         • Premium : ×
         `, m)
         client.sendReact(m.chat, '🕒', m.key)
         const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
         })
         const openai = new OpenAIApi(configuration)
         const json = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: text,
            temperature: 0.7,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
         })
         if (json.statusText != 'OK' || json.data.choices.length == 0) return client.reply(m.chat, global.status.fail, m)
         client.reply(m.chat, json.data.choices[0].text.trim(), m)
      } else if (command == 'ai-img') {
         if (!text) return client.reply(m.chat, Func.example(prefix, command, 'snow fox'), m)
         client.sendReact(m.chat, '🕒', m.key)
         const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
         })
         const openai = new OpenAIApi(configuration)
         const json = await openai.createImage({
            prompt: text,
            n: 1,
            size: '512x512'
         })
         if (json.statusText != 'OK' || json.data.data.length == 0) return client.reply(m.chat, global.status.fail, m)
         client.sendFile(m.chat, json.data.data[0].url, '', '', m)
      }
   } catch (e) {
      client.reply(m.chat, global.status.fail, m)
   }
}, {
   usage: ['brainly', 'ai-img'],
   use: 'query',
   category: 'features',
   limit: true
}, __filename)
