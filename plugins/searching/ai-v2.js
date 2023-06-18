const { Configuration, OpenAIApi } = require('openai')
neoxr.create(async (m, {
  client,
  text,
  prefix,
  command,
  Func
}) => {
  try {
      if (!text) return client.reply(m.chat, Func.example(prefix, command, 'siapa itu megawati?'), m)
      client.sendReact(m.chat, '🕒', m.key)
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
      });
      const openai = new OpenAIApi(configuration);
      const json = await openai.createChatCompletion({
          model: "gpt-3.5-turbo-16k-0613",
          messages: [{role: "user", content: text}],
          });
          if (json.statusText != 'OK' || json.data.choices.length == 0) return client.reply(m.chat, global.status.fail, m)
          client.reply(m.chat, json.data.choices[0].message.content, m)
  } catch (e) {
    client.reply(m.chat, global.status.fail, m)
  }
}, {
  usage: ['ai'],
  use: 'query',
  category: 'searching',
  limit: 2,
  fitai: true
}, __filename);
