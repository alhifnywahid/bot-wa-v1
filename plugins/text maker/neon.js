const thiccysapi = require('textmaker-thiccy');
neoxr.create(async (m, {
    command,
    text,
    prefix,
    client,
    args,
    Func
  }) => {
    try {
        if (!text) return client.reply(m.chat, Func.example(prefix, command, 'gopret'), m)
        if (text.length > 10) return client.reply(m.chat, Func.texted('bold', `🚩 Text is too long max 10 characters.`), m)
        client.sendReact(m.chat, '🕒', m.key)
        const url = "https://textpro.me/neon-light-text-effect-online-882.html"
        const man = await thiccysapi.textpro(url, text)
        console.log(man)
    } catch (e) {
      client.reply(m.chat, global.status.fail, m)
    }
  }, {
    usage: ['neon'],
    category: 'text maker',
    premium: false,
    private: false,
    owner: false,
    limit: 2,
  }, __filename);
