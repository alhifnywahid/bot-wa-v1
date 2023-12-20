// const { Configuration, OpenAIApi } = require('openai')
// neoxr.create(async (m, {
//    client,
//    text,
//    prefix,
//    command,
//    Func
// }) => {
//    try {
//       if (!text) return client.reply(m.chat, Func.example(prefix, command, 'siapa penemu lampu?'), m)
//       client.sendReact(m.chat, '🕒', m.key)
//       const configuration = new Configuration({
//          apiKey: process.env.OPENAI_API_KEY
//       })
//       const openai = new OpenAIApi(configuration)
//       const json = await openai.createCompletion({
//          model: 'text-davinci-003',
//          prompt: text,
//          temperature: 0.7,
//          max_tokens: 3500,
//          top_p: 1,
//          frequency_penalty: 0,
//          presence_penalty: 0,
//       })
//       if (json.statusText != 'OK' || json.data.choices.length == 0) return client.reply(m.chat, global.status.fail, m)
//       client.reply(m.chat, json.data.choices[0].text.trim(), m)
//    } catch (e) {
//       client.reply(m.chat, global.status.fail, m)
//    }
// }, {
//    usage: ['brainly'],
//    use: 'query',
//    category: 'artificial intelligence',
//    limit: 1,
//    fitai: true
// }, __filename)
