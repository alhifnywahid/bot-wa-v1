const { Configuration, OpenAIApi } = require('openai')
neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
}) => {
   if (!text) {
      return client.reply(m.chat, Func.example(prefix, command, 'siapa presiden indonesia sekarang?'), m)
    }
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);
      client.sendReact(m.chat, '🕒', m.key)
      const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
 client.reply(m.chat, `${response.data.choices[0].message.content}`, m)
}, {
   usage: ['ai'],
   use: 'query',
   category: 'utilities',
   limit: 2
}, __filename)
