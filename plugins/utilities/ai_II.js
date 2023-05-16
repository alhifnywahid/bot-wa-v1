const { Configuration, OpenAIApi } = require('openai')
neoxr.create(async (m, {
   client,
   text,
   prefix,
   command,
   Func
}) => {
  const arigato = [{
    buttonId: `${prefix}arigato`,
    buttonText: {
      displayText: 'Terimakasih'
    },
    type: 1
  }]
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
 //! SEND MESSAGE WITH TEKS 
 client.reply(m.chat, `${response.data.choices[0].message.content}`, m)
 //! SEND MESSAGE WITH BUTTONS
 //client.sendButtonText(m.chat, response.data.choices[0].message.content, `${global.botname}`, arigato)
}, {
   usage: ['ai'],
   use: 'query',
   category: 'utilities',
   limit: 2,
   fitai: true
}, __filename)
