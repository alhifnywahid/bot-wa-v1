const chatGPTAPI = require('@danitech/chatgpt-api');
const { models } = chatGPTAPI;
const { chatGPT35 } = models;
neoxr.create(async (m, {
  client,
  command,
  prefix,
  text,
  Func
}) => {
  try {
   if (!text) return client.reply(m.chat, Func.example(prefix, command, 'cara membuat nasi goreng?'), m)
   const response = await chatGPT35(text);
   client.sendReact(m.chat, '🕒', m)
   console.log(response)
   client.reply(m.chat, response, m)
  } catch (e) {
     client.reply(m.chat, '*Maaf fitur ini mungkin sedang eror!, Silahkan hubungi owner.*', m)
     console.log(e)
  }
}, {
  cache: true,
  usage: ['bing'],
  use: 'text',
  limit: 2,
  category: 'artificial intelligence',
  premium: false
}, __filename)
