// const { Configuration, OpenAIApi } = require('openai')
// neoxr.create(async (m, {
//    client,
//    text,
//    prefix,
//    command,
//    Func
// }) => {
//    try {
//       if (!text) return client.reply(m.chat, Func.example(prefix, command, 'snow fox'), m)
//       client.sendReact(m.chat, '🕒', m.key)
//       const configuration = new Configuration({
//          apiKey: process.env.OPENAI_API_KEY
//       })
//       const openai = new OpenAIApi(configuration)
//       const json = await openai.createImage({
//          prompt: text,
//          n: 1,
//          size: '512x512'
//       })
//       if (json.statusText != 'OK' || json.data.data.length == 0) return client.reply(m.chat, global.status.fail, m)
//       client.sendFile(m.chat, json.data.data[0].url, '', '', m)
//    } catch (e) {
//       client.reply(m.chat, global.status.fail, m)
//    }
// }, {
//    usage: ['ai-img'],
//    use: 'query',
//    category: 'artificial intelligence',
//    limit: 1,
//    fitai: true
// }, __filename)
